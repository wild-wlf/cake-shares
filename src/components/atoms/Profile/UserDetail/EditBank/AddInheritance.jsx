import Button from "@/components/atoms/Button";
import Field from "@/components/atoms/Field";
import React, { useEffect, useState } from "react";
import { StyledEditForm } from "./EditForm.styles";
import Form from "@/components/molecules/Form/Form";
import { useForm } from "@/components/molecules/Form";
import { countries } from "@/components/Constant";
import Image from "next/image";
import Select from "@/components/atoms/Select";
import ModalContainer from "@/components/atoms/ModalContainer";
import { MdModeEdit } from "react-icons/md";
import Password from "../../../../../_assets/changePassword.svg";
import ChangePassword from "../ChangePassword";
import CenterModal from "@/components/atoms/Modal/CenterModal";
import { AuthContext } from "@/components/Context/authContext";
import { useContextHook } from "use-context-hook";
const AddInheritance = () => {
  const [arr, setArr] = useState(countries);
  const [changePassword, setChangePassword] = useState(false);
  const [form] = useForm();
  const { setPermission } = useContextHook(AuthContext, (v) => ({
    setPermission: v.setPermission,
  }));
  const [loding, setLoding] = useState(false);
  async function handelSubmit(e) {
    console.log(e);
    // const obj = {
    //   type: "inheritance",
    //   info: {
    //     userId: userData?._id,
    //     name: e?.name,
    //     passportNumber: e?.passportNumber,
    //     country: e?.country,
    //   },
    // };
    // setLoding(true);

    // try {
    //   await userService.update(obj, selectedItem._id);
    //   Toast({
    //     type: "success",
    //     message: "updated successfully",
    //   });
    //   setPermission(true);
    //   onClose();
    // } catch (error) {
    //   Toast({
    //     type: "error",
    //     message: error.message,
    //   });
    // } finally {
    //   setLoding(false);
    // }
  }

  useEffect(() => {
    form.setFieldsValue({
      // full_name: "hamza",
      //  email: admin?.email,
      //  roles: roles?.filter(({ value }) =>
      //    admin?.roles?.find(({ id }) => id === value)
      //  ),
    });
  }, []);
  return (
    <>
      <StyledEditForm form={form} onSubmit={handelSubmit}>
        <div className="combine-fields">
          <Form.Item
            type="text"
            label="Name of Person"
            name="name"
            sm
            rounded
            placeholder="Jhon Doe"
            rules={[
              {
                required: true,
                message: "Person name is required",
              },
              {
                pattern: /^.{0,40}$/,
                message: "Maximum Character Length is 256",
              },
            ]}
          >
            <Field />
          </Form.Item>
          <Form.Item
            type="text"
            label="Passport Number"
            name="passportNumber"
            sm
            rounded
            placeholder="123467894562339"
            rules={[
              { required: true },
              {
                pattern: /^.{0,40}$/,
                message: "Maximum Character Length is 256",
              },
            ]}
          >
            <Field />
          </Form.Item>
          <Form.Item
            type="text"
            label="Country of Residence"
            name="country"
            sm
            rounded
            placeholder="United States"
            rules={[
              { required: true },

              {
                pattern: /^.{0,40}$/,
                message: "Maximum Character Length is 256",
              },
            ]}
          >
            <Field />
          </Form.Item>
        </div>
        <Button rounded md btntype="primary" width="170" htmlType="submit">
          Add
        </Button>
      </StyledEditForm>
    </>
  );
};

export default AddInheritance;
