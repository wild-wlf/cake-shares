import React, { useEffect, useState } from "react";
import Button from "@/components/atoms/Button";
import Field from "@/components/atoms/Field";
import { useForm } from "@/components/molecules/Form";
import { StyledEditForm } from "./EditForm.styles";
import Form from "@/components/molecules/Form/Form";
import userService from "@/services/userService";
import Toast from "@/components/molecules/Toast";
import { useContextHook } from "use-context-hook";
import { AuthContext } from "@/components/Context/authContext";

const EditBank = ({ bankInfo, onClose }) => {
  const { setPermission } = useContextHook(AuthContext, (v) => ({
    setPermission: v.setPermission,
  }));
  const [loading, setloading] = useState(false);

  const [form] = useForm();
  console.log("Bank Info", bankInfo);
  useEffect(() => {
    form.setFieldsValue({
      bankName: bankInfo.bankName,
      iban: bankInfo.iban,
      swiftBicNumber: bankInfo.swiftBicNumber,
      userId: bankInfo.userId,
    });
  }, []);
  async function handelSubmit(e) {
    setloading(true);
    let obj = {
      type: "bank",
      info: {
        bankName: e.bankName,
        iban: e.iban,
        swiftBicNumber: e.swiftBicNumber,
        userId: e.userId,
      },
    };

    try {
      await userService.update(obj, bankInfo.bankId);

      Toast({
        type: "success",
        message: "updated successfully",
      });
      setloading(false);
      setPermission(true);
      onClose();
    } catch (error) {
      setloading(false);
      Toast({
        type: "error",
        message: error.message,
      });
      console.log(error);
    }
  }

  return (
    <StyledEditForm form={form} onSubmit={handelSubmit}>
      <div className="combine-fields">
        <Form.Item
          type="text"
          label="Bank Name"
          name="bankName"
          sm
          rounded
          placeholder="Bank of America"
          rules={[
            {
              required: true,
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
          label="IBAN"
          name="iban"
          sm
          rounded
          placeholder="PK033310084246213"
          rules={[
            {
              required: true,
            },
            {
              pattern: /^.{0,256}$/,
              message: "Maximum Character Length is 256",
            },
          ]}
        >
          <Field />
        </Form.Item>
        <Form.Item
          type="text"
          label="SWIFT / BIC Number"
          name="swiftBicNumber"
          sm
          rounded
          placeholder="PK033310084246213"
          rules={[
            {
              required: true,
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
          label="User ID"
          name="userId"
          sm
          rounded
          placeholder="33445554"
          rules={[
            {
              required: true,
            },
            {
              pattern: /^.{0,256}$/,
              message: "Maximum Character Length is 256",
            },
          ]}
        >
          <Field />
        </Form.Item>
      </div>

      <Button
        rounded
        md
        btntype="primary"
        width="170"
        htmlType="submit"
        disabled={loading}
        loader={loading}
      >
        Save Changes
      </Button>
    </StyledEditForm>
  );
};

export default EditBank;
