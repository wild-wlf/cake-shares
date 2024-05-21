import React, { useContext, useEffect, useState } from "react";
import { Wrapper } from "./completeRegistrationModal.style";
import Field from "../Field";
import Form, { useForm } from "@/components/molecules/Form";
import Button from "../Button";
import Select from "../Select";
import Image from "next/image";
import { countries } from "@/components/Constant";
import UploadImg from "@/components/molecules/UploadImg";
import KycLevel from "../KYC/KycLevel";
import { KycContext } from "@/components/Context/KycContext";
import { UserContext } from "@/components/Context/UserContext";
import userService from "@/services/userService";
import { Toast, toast } from "react-toastify";
const CompleteRegistrationModal = ({ handleRegistration }) => {
  const { kycLevel, setKycLevel, checkKycLevel } = useContext(KycContext);
  const { buyerRegistrationData } = useContext(UserContext);
  // const { message } = userService.createUser();
  const [arr, setArr] = useState(countries);
  const [image, setImage] = useState("");
  const [form] = useForm();

  function handelChange(value = "PK") {
    const newArr = arr.map((elem, index) => ({
      ...elem,
      label: (
        <div key={index} className="countrySelect">
          <figure>
            <Image
              src={`https://flagsapi.com/${elem.value}/shiny/48.png`}
              width={48}
              height={48}
              alt={`Flag of ${elem.value}`}
            />
          </figure>
          {elem.label}
        </div>
      ),
    }));
    setArr(newArr);
  }
  useEffect(() => {
    form.setFieldsValue({
      username: buyerRegistrationData.username,
      email: buyerRegistrationData?.email,
    });
    handelChange();
  }, []);
  const convertToFormData = (obj) => {
    console.log(obj);
    const formData = new FormData();

    Object.keys(obj).forEach((key) => {
      if (
        key === "bankInfo" ||
        (key === "inheritanceInfo" && typeof obj[key] === "object")
      ) {
        formData.append(key, JSON.stringify(obj[key]));
      } else {
        formData.append(key, obj[key]);
      }
    });
    return formData;
  };
  const handleSubmit = async (e) => {
    let obj = {
      profilePicture: image,
      type: buyerRegistrationData.type,
      password: buyerRegistrationData.password,
      dob: e.dob,
      email: e.email,
      fullName: e.name,
      username: e.username,
      country: e.select.value,
      bankInfo: {
        bankName: e.bank_bank_name,
        iban: e.bank_iban_number,
        swiftBicNumber: e.bic_number,
        userId: e.user_id,
      },
      inheritanceInfo: {
        name: e.person_name,
        passportNumber: e.passport_number,
        country: e.country,
      },
    };

    const formData = convertToFormData(obj);
    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    try {
      await userService.createUser(formData);
      toast.success("User Registered Successfully!");
      handleRegistration();
    } catch (error) {
      toast.error(error.message);
    }
  };
  console.log(image);
  return (
    <Wrapper>
      <Form form={form} onSubmit={handleSubmit}>
        <div className="personal-info">
          <h5>Personal Info:</h5>

          <div>
            <UploadImg onChange={(e) => setImage(e)} />
            <div className="input-div">
              <Form.Item
                type="text"
                label="Full Name"
                name="name"
                sm
                rounded
                placeholder="Alex Mertiz"
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
                label="Username"
                name="username"
                sm
                rounded
                placeholder="alex123"
                rules={[
                  {
                    required: true,
                  },
                  {
                    pattern: /^[a-zA-Z0-9_-]{8,40}$/,
                    message: "Maximum Character Length is 256",
                  },
                ]}
              >
                <Field />
              </Form.Item>
            </div>
            <div className="input-div">
              <Form.Item
                type="text"
                label="Email Address"
                name="email"
                sm
                rounded
                placeholder="alex123@gmail.com"
                rules={[
                  {
                    required: true,
                  },
                  {
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
                    message: "Maximum Character Length is 256",
                  },
                ]}
              >
                <Field />
              </Form.Item>
              <Form.Item
                label="Country"
                name="select"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select options={arr} />
              </Form.Item>
            </div>
            <div className="DOB-div">
              <Form.Item
                type="date"
                label="Birthdate (D.O.B)"
                name="dob"
                sm
                rounded
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Field />
              </Form.Item>
            </div>
          </div>
        </div>
        <div className="bank-info">
          <h5>Bank Info:</h5>

          <div>
            <div className="input-div">
              <Form.Item
                type="text"
                label="Bank Name"
                name="bank_bank_name"
                sm
                rounded
                placeholder="Bank of Americe"
                rules={[
                  {
                    required: true,
                  },
                  {
                    pattern: /^.{8,256}$/,
                    message: "Please enter a valid Bank Name",
                  },
                ]}
              >
                <Field />
              </Form.Item>
              <Form.Item
                type="text"
                label="IBAN"
                name="bank_iban_number"
                sm
                rounded
                placeholder="PK033310084246213"
                rules={[
                  {
                    required: true,
                    message: "Please enter IBAN number",
                  },
                  {
                    pattern: /^[A-Z]{2}\d{2}[A-Z0-9]{11,30}$/,
                    message: "Please enter a valid IBAN number",
                  },
                ]}
              >
                <Field />
              </Form.Item>
            </div>
            <div className="input-div">
              <Form.Item
                type="text"
                label="SWIFT / BIC Number"
                name="bic_number"
                sm
                rounded
                placeholder="PK033310084246213"
                rules={[
                  {
                    required: true,
                  },
                  {
                    pattern: /^[A-Z]{4}[A-Z]{2}[A-Z0-9]{2}([A-Z0-9]{3})?$/,
                    message: "Invalid SWIFT/BIC format",
                  },
                ]}
              >
                <Field />
              </Form.Item>
              <Form.Item
                type="text"
                label="User ID"
                name="user_id"
                sm
                rounded
                placeholder="33445554"
                rules={[
                  {
                    required: true,
                  },
                  {
                    pattern: /^[a-zA-Z0-9_-]{8,256}$/,
                    message:
                      "User ID must be between 8 and 256 characters long",
                  },
                ]}
              >
                <Field />
              </Form.Item>
            </div>
          </div>
        </div>
        <div className="kyc-info">
          <h5>KYC Info:</h5>

          <div>
            <div className="kyc-div">
              <div>
                <span>My KYC Level</span>
                <span>{kycLevel - 1}</span>
              </div>
              <div className="kyc-wrap">
                <KycLevel level={kycLevel} />

                <span className="upgrade-kyc" onClick={checkKycLevel}>
                  Upgrade KYC
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="inheritance-info">
          <h5>Inheritance Info:</h5>

          <div>
            <div className="input-div">
              <Form.Item
                type="text"
                label="Name of Person"
                name="person_name"
                sm
                rounded
                placeholder="Logan Paulson"
                rules={[
                  {
                    required: true,
                  },
                  {
                    pattern: /^.{0,40}$/,
                    message: "Please enter a valid name",
                  },
                ]}
              >
                <Field />
              </Form.Item>
              <Form.Item
                type="number"
                label="Passport Number"
                name="passport_number"
                sm
                rounded
                placeholder="123467894562339"
                rules={[
                  {
                    required: true,
                  },
                  {
                    pattern: /^[a-zA-Z0-9]{6,9}$/,
                    message:
                      "Passport number must be between 6 and 9 characters long",
                  },
                ]}
              >
                <Field />
              </Form.Item>
            </div>
            <div className="DOB-div">
              <Form.Item
                type="text"
                label="Country of Residence"
                name="country"
                sm
                rounded
                placeholder="United States"
                rules={[
                  {
                    required: true,
                  },
                  {
                    pattern: /^.{0,40}$/,
                    message: "Please enter a valid country",
                  },
                ]}
              >
                <Field />
              </Form.Item>
            </div>
            {/* <div className="addmore">
              <span>+Add more</span>
            </div> */}
          </div>
        </div>

        <Button rounded md btntype="primary" width="170" htmlType="submit">
          Go To Home
        </Button>
      </Form>
    </Wrapper>
  );
};

export default CompleteRegistrationModal;
