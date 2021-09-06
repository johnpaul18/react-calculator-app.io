import styled from "styled-components";

const backgroundColors = [
  "hsl(222, 26%, 31%)",
  "hsl(0, 0%, 90%)",
  "hsl(268, 75%, 9%)",
];

export const StyledContainer = (component) => styled(component)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${(props) => backgroundColors[props.t]};
  transition: 0.5s;
`;
