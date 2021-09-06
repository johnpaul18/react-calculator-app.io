import styled from "styled-components";

let colors = ["#fff", "hsl(60, 10%, 19%)", "hsl(52, 100%, 62%)"];

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => colors[props.t]};
  font-family: "Spartan", sans-serif;
  font-weight: 700;
  padding: 5px;
  box-sizing: border-box;
`;
