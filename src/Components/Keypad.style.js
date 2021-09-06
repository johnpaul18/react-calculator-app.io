import styled from "styled-components";

let backgroundColors = [
  "hsl(223, 31%, 20%)",
  "hsl(0, 5%, 81%)",
  "hsl(268, 71%, 12%)",
];

export const StyledKeypad = styled.div`
  background-color: ${(props) => backgroundColors[props.t]};
  margin-top: 20px;
  border-radius: 5px;
  padding: 15px 10px;
  display: grid;
  justify-content: center;
  grid-template-columns: 20% 20% 20% 20%;
  grid-gap: 15px;
  height: 300px;
  grid-template-areas:
    "seven eight nine del"
    "four five six add"
    "one two three sub"
    "point zero div mul"
    "reset reset equal equal";
`;
