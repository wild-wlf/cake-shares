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
`;
