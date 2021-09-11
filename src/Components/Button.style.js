import styled from "styled-components";

let backgroundColors = [
  ["hsl(225, 21%, 49%)", "hsl(6, 63%, 50%)", "hsl(30, 25%, 89%)"],
  ["hsl(185, 42%, 37%)", "hsl(25, 98%, 40%)", "hsl(45, 7%, 89%)"],
  ["hsl(281, 89%, 26%)", "hsl(176, 100%, 44%)", "hsl(268, 47%, 21%)"],
];

let shadowColors = [
  ["hsl(224, 28%, 35%)", "hsl(6, 70%, 34%)", "hsl(28, 16%, 65%)"],
  ["hsl(185, 58%, 25%)", "hsl(25, 99%, 27%)", "hsl(35, 11%, 61%)"],
  ["hsl(285, 91%, 52%)", "hsl(177, 92%, 70%)", "hsl(290, 70%, 36%)"],
];

let colors = [
  ["#fff", "#fff", "hsl(221, 14%, 31%)"],
  ["#fff", "#fff", "hsl(60, 10%, 19%)"],
  ["#fff", "hsl(198, 20%, 13%)", "hsl(52, 100%, 62%)"],
];

export const StyledButton = (component) => styled(component)`
  content: ${(props) => props.name};
  grid-area: ${(props) => props.area};
  font-size: ${(props) => (props.name.length > 1 ? "14px" : "23px")};
  font-weight: 700;
  color: ${(props) => colors[props.t1][props.t2]};
  text-align: center;
  background-color: ${(props) => backgroundColors[props.t1][props.t2]};
  box-shadow: 0 3px ${(props) => shadowColors[props.t1][props.t2]};
  border: none;
  outline: none;
  margin: 0;
  border-radius: 5px;
  letter-spacing: 1px;

  &:hover {
    opacity: 0.5;
  }
`;
