import React from "react";
import { StyledInheritance } from "./Inheritance.styles";
import { IoIosAdd } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { MdModeEdit, MdOutlineDeleteForever } from "react-icons/md";
import ModalContainer from "@/components/atoms/ModalContainer";
import EditProfile from "../EditBank/EditProfile";
import DeleteInheritance from "../EditBank/DeleteInheritance";
import notaccess from "../../../../../_assets/notaccess.svg";
import Image from "next/image";
const Inheritance = () => {
  const inheritanceData = [
    {
      name: "Logan Paulson",
      accNo: "123456123564262854",
      country: "United States",
    },
    {
      name: "Logan Paulson",
      accNo: "123456123564262854",
      country: "United States",
    },
    {
      name: "Logan Paulson",
      accNo: "123456123564262854",
      country: "United States",
    },
    {
      name: "Logan Paulson",
      accNo: "123456123564262854",
      country: "United States",
    },
  ];
  return (
    <StyledInheritance>
      <div className="head">
        <span className="heading">My Inheritance</span>
        <div className="add-new">
          <IoIosAdd />
          <span>Add New</span>
        </div>
      </div>
      <div className="col-holder">
        {inheritanceData.map((elem, ind) => (
          <div className="col" key={ind}>
            <div className="user-col">
              <div className="img-holder">
                <IoPerson />
              </div>
              <div>
                <span className="name">{elem.name}</span>
                <span className="text">{elem.accNo}</span>
              </div>
            </div>
            <div className="user-edit-del">
              <div className="edit-del-wrapper">
                <ModalContainer
                  lg
                  width={673}
                  title="Edit Profile"
                  btnComponent={({ onClick }) => (
                    <div className="edit" onClick={onClick}>
                      <MdModeEdit />
                    </div>
                  )}
                  content={({ onClose }) => <EditProfile onClose={onClose} />}
                />
                <ModalContainer
                  lg
                  width={543}
                  title={
                    <>
                      <Image src={notaccess} alt="notaccess" />
                    </>
                  }
                  btnComponent={({ onClick }) => (
                    <div className="delete" onClick={onClick}>
                      <MdOutlineDeleteForever />
                    </div>
                  )}
                  content={({ onClose }) => (
                    <DeleteInheritance onClose={onClose} />
                  )}
                />
              </div>
              <span className="text">{elem.country}</span>
            </div>
          </div>
        ))}
      </div>
    </StyledInheritance>
  );
};

export default Inheritance;
