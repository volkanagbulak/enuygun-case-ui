import styled from "styled-components";

const StyledLink = styled.a`
font-size: 20px;
    line-height: 24px;
    font-family: "Ubuntu", sans-serif;
    font-weight: 700;
    color: #1a0a1e;
    transition: all 0.3s linear;
    &:hover {

        text-decoration: none;
        color: #fc097c;
    }
      }
  ${(props) => {
    if (props.variant === "primary") {
      return `
        background-color: green;
      `;
    } else if (props.variant === "secondary") {
      return `
        background-color: red;
      `;
    } else {
      return `
        background-color: gray;
      `;
    }
  }}
`;

export default StyledLink;
