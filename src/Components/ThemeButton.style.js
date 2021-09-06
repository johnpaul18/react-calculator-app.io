import styled from "styled-components";

let themes = ["flex-start", "center", "flex-end"];
let backgroundColors = [
  "hsl(223, 31%, 20%)",
  "hsl(0, 5%, 81%)",
  "hsl(268, 71%, 12%)",
];

export const StyledThemeButton = (component) => styled(component)`
  width: 50px;
  height: 20px;
  background-color: ${(props) => backgroundColors[props.t]};
  display: flex;

  justify-content: ${(props) => themes[props.t]};
  align-items: center;
  border-radius: 50px;
  padding: 0 5px;
  position: relative;
  transition: align-items 2s;

  & div {
    border-radius: 50%;
    height: 13px;
    width: 13px;

    background-color: hsl(6, 63%, 50%);
  }

  &::before {
    content: "123";
    letter-spacing: 15px;
    position: absolute;
    top: -100%;
    left: 5px;
  }
`;
