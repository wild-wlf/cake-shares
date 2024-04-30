import React from "react";
import { StyledInheritance } from "./Inheritance.styles";
import { IoIosAdd } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { MdModeEdit, MdOutlineDeleteForever } from "react-icons/md";

const Inheritance = () => {
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
        <div className="col">
          <div className="user-col">
            <div className="img-holder">
              <IoPerson />
            </div>
            <div>
              <span className="name">Logan Paulson</span>
              <span className="text">123456123564262854</span>
            </div>
          </div>
          <div className="user-edit-del">
            <div className="edit-del-wrapper">
              <div className="edit">
                <MdModeEdit />
              </div>
              <div className="delete">
                <MdOutlineDeleteForever />
              </div>
            </div>
            <span className="text">United States</span>
          </div>
        </div>
        <div className="col">
          <div className="user-col">
            <div className="img-holder">
              <IoPerson />
            </div>
            <div>
              <span className="name">Logan Paulson</span>
              <span className="text">123456123564262854</span>
            </div>
          </div>
          <div className="user-edit-del">
            <div className="edit-del-wrapper">
              <div className="edit">
                <MdModeEdit />
              </div>
              <div className="delete">
                <MdOutlineDeleteForever />
              </div>
            </div>
            <span className="text">United States</span>
          </div>
        </div>
        <div className="col">
          <div className="user-col">
            <div className="img-holder">
              <IoPerson />
            </div>
            <div>
              <span className="name">Logan Paulson</span>
              <span className="text">123456123564262854</span>
            </div>
          </div>
          <div className="user-edit-del">
            <div className="edit-del-wrapper">
              <div className="edit">
                <MdModeEdit />
              </div>
              <div className="delete">
                <MdOutlineDeleteForever />
              </div>
            </div>
            <span className="text">United States</span>
          </div>
        </div>
        <div className="col">
          <div className="user-col">
            <div className="img-holder">
              <IoPerson />
            </div>
            <div>
              <span className="name">Logan Paulson</span>
              <span className="text">123456123564262854</span>
            </div>
          </div>
          <div className="user-edit-del">
            <div className="edit-del-wrapper">
              <div className="edit">
                <MdModeEdit />
              </div>
              <div className="delete">
                <MdOutlineDeleteForever />
              </div>
            </div>
            <span className="text">United States</span>
          </div>
        </div>
      </div>
    </StyledInheritance>
  );
};

export default Inheritance;
