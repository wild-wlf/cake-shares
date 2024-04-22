import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0px 50px 0px 50px;
  .CardWrapper {
    width: 100%;
    border-radius: 20px;
    background-color: #fefefe;
    box-shadow: 1px 8px 17px 0 rgba(0, 0, 0, 0.1),
      4px 31px 31px 0 rgba(0, 0, 0, 0.09);
    min-height: 180px;
  }
  .image-div {
    padding: 10px 10px 0px;
    height: 204px;
    border-radius: 20px 20px 0px 0px;
    position: relative;
    img {
      object-fit: cover;
      height: 100%;
      border-radius: 20px 20px 0px 0px;
    }
  }
  .tagWrapper {
    position: absolute;
    top: 16px;
    left: 16px;
    display: flex;
    justify-content: center;
    align-items: end;
    gap: 95px;
  }
  .tag {
    font-size: 11px;
    width: 75px;
    height: 25px;
    background-color: rgba(255, 255, 255, 1);
    color: rgba(78, 97, 153, 1);
    border-radius: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .decription {
    width: 201px;
    height: 49px;
    border-radius: 0px 0px 20px 20px;
    padding: 10px;
    margin: 0px 10px 0px 10px;
    gap: 10px;
    font-weight: 400;
    font-size: 10px;
    background-color: var(--white);
    display: flex;
    flex-direction: column;
    gap: 11px;
  }
  .title-div {
    display: flex;
    justify-content: space-between;
  }
`;
