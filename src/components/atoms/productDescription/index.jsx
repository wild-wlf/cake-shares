import React, { useState } from "react";
import { Wrapper } from "./productDescription.style";
import Profilepic from "../../../_assets/userProfile.png";
import Image from "next/image";
import { TbExternalLink } from "react-icons/tb";
import { PiChatTeardropTextFill } from "react-icons/pi";
import CenterModal from "../Modal/CenterModal";
import NotAccessModal from "../notAccessModal";
import NotAccessPic from "../../../_assets/notaccess.svg";
const ProductDescription = () => {
  const [modal, setModal] = useState(false);

  const handleCloseModal = () => {
    setModal(false);
  };

  return (
    <>
      <CenterModal
        open={modal}
        setOpen={setModal}
        title={<Image src={NotAccessPic} className="notaccesspic" alt="notaccess"/>}
        width="543"
      >
        <NotAccessModal handleCloseModal={handleCloseModal} />
      </CenterModal>
      <Wrapper>
        <div className="descwrapper">
          <div className="description">
            <h4>Description</h4>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              ultricies et mi quis scelerisque. Integer vitae posuere est, nec
              mollis diam. Donec feugiat eu mauris sed rutrum. Interdum et
              malesuada fames ac ante ipsum primis in faucibus. Aliquam auctor
              gravida nulla. Donec feugiat eu mauris sed rutrum. Interdum et
              malesuada fames ac ante ipsum primis in faucibus. Aliquam auctor
              gravida nulla.
            </span>
          </div>
          <div className="seller">
            <div className="profilepic">
              <Image src={Profilepic} alt="profilepic"/>
            </div>
            <div className="profiledesc">
              <h3>Logan Paulson</h3>
              <span>Private Seller</span>
              <br />
              <div className="btnwrapper">
                <span className="viewprofile" onClick={() => setModal(true)}>
                  View Profile <TbExternalLink className="icon" />
                </span>
                <span className="message" onClick={() => setModal(true)}>
                  Message Seller <PiChatTeardropTextFill className="icon" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default ProductDescription;
