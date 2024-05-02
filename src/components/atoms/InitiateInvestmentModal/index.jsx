import React from "react";
import Field from "../Field";
import Form, { useForm } from "@/components/molecules/Form";
import Button from "../Button";
import { InvestmentModalWrapper } from "./InitiateInvestmentModal.style";

const InitiateInvestmentModal = ({ handleCloseModal }) => {
  const [form] = useForm();

  return (
    <InvestmentModalWrapper>
      <div>
        <span className="description">
          Please fill up the details to proceed.
        </span>
      </div>
      <Form form={form}>
        <div className="current-wallet">
          Current Wallet Balance: <span>$35,265.000</span>
        </div>
        <div className="input-div">
          <Form.Item
            type="number"
            label="Enter Amount"
            name="name"
            sm
            rounded
            placeholder="$7,200"
            rules={[
              {
                required: true,
              },
              {
                pattern: /^.{0,8}$/,
                message: "Maximum Investment is 10000000",
              },
            ]}
          >
            <Field />
          </Form.Item>
        </div>
        <div className="text-wrapper">
          You will own <span>0.36%</span> of the assets, valued at a total of
          $2,000,000.
        </div>
        <div>
          <Button
            rounded
            md
            btntype="primary"
            width="170"
            onClick={handleCloseModal}
            // htmlType="submit"
          >
            Buy Shares
          </Button>
        </div>
      </Form>
    </InvestmentModalWrapper>
  );
};

export default InitiateInvestmentModal;
