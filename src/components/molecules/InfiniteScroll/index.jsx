import React, { useState, useEffect, useRef } from 'react';
import { InfiniteScrollWrapper, Message, LoaderWrapper } from './InfiniteScroll.styles';
import InfiniteScrollLoader from './InfiniteScrollLoader';

const InfiniteScroll = ({ dataLength, fetchMore, hasMore, children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const scrollPositionRef = useRef(0);

  const debounce = (func, delay) => {
    let debounceTimer;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
  };

  const manageFetching = async () => {
    if (isLoading || !hasMore || !dataLength) return;

    try {
      setIsLoading(true);
      scrollPositionRef.current = window.scrollY;
      await fetchMore();
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const handleScroll = debounce(() => {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
      const scrollThreshold = scrollHeight * 0.8;

      if (scrollTop + clientHeight >= scrollThreshold) {
        manageFetching();
      }
    }, 200);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [manageFetching]);

  return (
    <InfiniteScrollWrapper>
      {children}
      {isLoading && (
        <LoaderWrapper>
          <InfiniteScrollLoader />
        </LoaderWrapper>
      )}
      {!hasMore && !!dataLength && <Message>You have seen it all!</Message>}
    </InfiniteScrollWrapper>
  );
};

export default InfiniteScroll;
