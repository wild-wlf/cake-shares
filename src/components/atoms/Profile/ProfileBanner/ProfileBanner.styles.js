import styled from "styled-components";
import bgImage from "../../../../_assets/banerImage.jpg";

export const StyledProfileBanner = styled.div`
  position: relative;
  min-height: 306px;
  background-image: ${({ $image }) =>
    $image === null ? `url(${bgImage.src})` : `url(${$image})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 30px -50px 15px -50px;
  padding: 0 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Oleo Script";
  color: var(--white);
  .title {
    max-width: 334px;
    margin: 0 auto;
    font-size: 42px;
    font-weight: 700;
    line-height: 58.09px;
    text-align: center;
  }
  button {
    position: absolute;
    z-index: 5;
    bottom: 20px;
    right: 50px;
    color: var(--white);
    padding: 10px 24px;
    cursor: pointer;
    border-radius: 60px;
    background: rgba(117, 131, 135, 0.5);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);

    input {
      display: none;
    }

    label {
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 12px;
    }
  }
  .rounded-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    border-radius: 16px;
    background: rgba(255, 255, 255, 0.5);
  }
`;
