import styled from "styled-components";

const StyledButton = styled.button`
  display: inline-block;
  padding: 0.6rem 1.25rem;
  font-size: 0.9375rem;
  font-weight: 500;
  line-height: 1.125;
  color: #6f6b7d;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  border: 1px solid transparent;
  border-radius: 0.375rem;
  background-color: transparent;
  transition: all 0.2s ease-in-out;

  ${(props) => {
    if (props.variant === "primary") {
      return `
      color: #fff;
      background-color: #7367f0;
      border-color: #7367f0;
      &:hover{
        
    color: #fff !important;
    background-color: #685dd8 !important;
    border-color: #685dd8 !important;
      }
      `;
    } else if (props.variant === "secondary") {
      return `
      color: #fff;
      background-color: #ea5455;
      border-color: #ea5455;
      &:hover {
        color: #fff !important;
        background-color: #d34c4d !important;
        border-color: #d34c4d !important;
    }
      `;
    } else {
      return `
      color: #fff;
      background-color: #a8aaae;
      border-color: #a8aaae;
      &::hover {
        color: #fff !important;
        background-color: #97999d !important;
        border-color: #97999d !important;
    }

      `;
    }
  }}
`;

export default StyledButton;
