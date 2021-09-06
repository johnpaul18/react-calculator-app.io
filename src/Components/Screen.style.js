import styled from "styled-components";

let backgroundColors = [
  "hsl(224, 36%, 15%)",
  "hsl(0, 0%, 93%)",
  "hsl(268, 71%, 12%)",
];

let colors = ["#fff", "hsl(60, 10%, 19%)", "hsl(52, 100%, 62%)"];

export const StyledScreen = (component) => styled(component)`
  font-size: 32px;
  border-radius: 5px;
  background-color: ${(props) => backgroundColors[props.t]};
  color: ${(props) => colors[props.t]};
  font-family: "Spartan", sans-serif;
  padding: 10px;
  max-height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-weight: 700;
`;
