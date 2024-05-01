import styled from "styled-components";
import Form from "@/components/molecules/Form/Form";

export const StyledEditForm = styled.div`
  padding-top: 30px;
  .combine-fields {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    column-gap: 30px;

    @media screen and (min-width: 624px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  .fake-label {
    display: inline-flex;
    gap: 10px;
    margin-bottom: 15px;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    text-align: left;
    cursor: pointer;
  }
`;
