/* eslint-disable no-unreachable */
import React, { useState, useEffect, startTransition } from "react";
import { createContextHook } from "use-context-hook";
import { clearCookie, getCookie, setCookie } from "@/helpers/common";
import { useCancellablePromise } from "@/helpers/promiseHandler";
import { useRouter } from "next/router";
import Toast from "@/components/molecules/Toast";
import userService from "@/services/userService";

const context = {};

export const AuthContext = createContextHook(context);

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!getCookie(process.env.NEXT_PUBLIC_TOKEN_COOKIE)
  );
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const [loading_user, setLoadingUser] = useState(false);
  const [fetch_user, setFetchUser] = useState(false);
  const [socketData, setSocketData] = useState(null);
  const { cancellablePromise } = useCancellablePromise();
  const [permission, setPermission] = useState(false);
  const [reFetch, setRefetch] = useState(false);
  const [showTokenModal, setShowTokenModal] = useState(false);
  const [allowedPages, setAllowedPages] = useState(
    JSON.parse(getCookie(process.env.NEXT_PUBLIC_ALLOWED_PAGES_COOKIE)) || []
  );

  const publicPages = ["/"];

  const privatePages = ["/profile"];

  const onLogout = async () => {
    try {
      await userService.logout();
    } finally {
      setUser({});
      clearCookie(process.env.NEXT_PUBLIC_TOKEN_COOKIE);
      clearCookie("is_email_verified");
      clearCookie("email");
      await router.push("/");
      Toast({ type: "success", message: "Logout Successfully" });
      setLoadingUser(false);
      setIsLoggedIn(false);
      setUser({});
    }
  };

  const getPermissions = () => {
    // debugger
    if (!isLoggedIn) return;
    setLoadingUser(true);
    cancellablePromise(userService.getCurrentAdmin())
      .then((res) => {
        setLoadingUser(false);
        setUser(res?.user);
        // router.push("/");
      })
      .catch((err) => {
        setLoadingUser(false);
        Toast({
          type: "error",
          message: err.message,
        });
      });
  };

  useEffect(() => {
    if (isLoggedIn || permission) {
      getPermissions();
      setPermission(false);
    } else if (!isLoggedIn) {
      if (privatePages.includes(router.pathname)) {
        router.push("/sign-in");
      }
    }
  }, [isLoggedIn, permission]);

  useEffect(() => {
    if (socketData?.approved) {
      setTimeout(() => {
        getPermissions();
      }, 1000);
    }
  }, [socketData]);

  const onLogin = async ({ username, password, type, sellerType }) => {
    setLoadingUser(true);
    setLoading(true);
    try {
      const res = await userService.login({
        username,
        password,
        type,
        sellerType,
      });

      if (!res?.token) {
        throw new Error(res?.message);
      }
      if (res?.type !== "Buyer") {
        setCookie(
          process.env.NEXT_PUBLIC_ADMIN_TOKEN_COOKIE,
          res?.token,
          null,
          process.env.NEXT_PUBLIC_ADMIN_DOMAIN
        );
        window.open(`${process.env.NEXT_PUBLIC_ADMIN_URL}`, "_blank");
      }

      if (res.type === "Buyer") {
        setCookie(process.env.NEXT_PUBLIC_TOKEN_COOKIE, res.token);
        router.push("/");
        setIsLoggedIn(true);
        Toast({ type: "success", message: "Logged In Successfully!" });
        setLoadingUser(false);
        setLoading(false);
      }
    } catch ({ message }) {
      setIsLoggedIn(false);
      setLoadingUser(false);
      setLoading(false);
      Toast({ type: "error", message });
    }
  };

  useEffect(() => {
    function listenCookieChange(callback, interval) {
      let old_bap_token = getCookie(process.env.NEXT_PUBLIC_TOKEN_COOKIE);
      let old_allowed = getCookie(process.env.NEXT_PUBLIC_ALLOWED_PAGES_COOKIE);
      startTransition(() => {
        setInterval(() => {
          const new_bap_token = getCookie(process.env.NEXT_PUBLIC_TOKEN_COOKIE);
          const new_allowed = getCookie(
            process.env.NEXT_PUBLIC_ALLOWED_PAGES_COOKIE
          );
          if (new_bap_token !== old_bap_token) {
            try {
              callback(new_bap_token, process.env.NEXT_PUBLIC_TOKEN_COOKIE);
            } finally {
              old_bap_token = new_bap_token;
            }
          }
          if (new_allowed !== old_allowed) {
            try {
              callback(
                new_allowed,
                process.env.NEXT_PUBLIC_ALLOWED_PAGES_COOKIE
              );
            } finally {
              old_allowed = new_allowed;
            }
          }
        }, interval);
      });
    }
    listenCookieChange((value, cookie) => {
      if (cookie === process.env.NEXT_PUBLIC_TOKEN_COOKIE) {
        if (!value) {
          // onLogout();
        }
      }
      if (cookie === process.env.NEXT_PUBLIC_ALLOWED_PAGES_COOKIE) {
        if (JSON.stringify(allowedPages) !== value && isLoggedIn) {
          getPermissions();
        }
      }
    }, 1000);
  }, []);

  const hasPermission = (perm) => user?.permissions?.includes(perm);
  return (
    <AuthContext.Provider
      value={{
        setIsLoggedIn,
        onLogout,
        onLogin,
        refetch: () => setRefetch((_) => !_),
        fetchUser: () => setFetchUser(() => !fetch_user),
        setShowTokenModal,
        setLoading,
        hasPermission,
        setSocketData,
        socketData,
        allowedPages,
        showTokenModal,
        loading,
        isLoggedIn,
        fetch: reFetch,
        user,
        setUser,
        setPermission,
        loading_user,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
