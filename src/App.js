import { useState } from "react";
import Container from "./Components/Container";
import Calculator from "./Components/Calculator";
import { StyledHeader } from "./Components/Header.style";
import ThemeControl from "./Components/ThemeControl";
import ThemeButton from "./Components/ThemeButton";
import Screen from "./Components/Screen";
import { StyledKeypad as Keypad } from "./Components/Keypad.style";
import Button from "./Components/Button";
import { GlobalStyle } from "./Components/GlobalStyle.style";
import Attributes from "./Components/Attriblutes";

function App() {
  const [theme, setTheme] = useState(0);
  const changeThemeHanler = () => {
    let currentTheme = theme;
    if (currentTheme === 2) currentTheme = 0;
    else ++currentTheme;

    setTheme(currentTheme);
  };

  const [calculatorValues, setCalculatorValues] = useState({
    operation: "",
    screenValue: "0",
    addend: "0",
  });

  const inputValue = (value) => {
    if (/^-?\d*[.,]?\d*$/.test(value)) {
      let currentValue = calculatorValues.screenValue;
      if (
        value === "." &&
        (currentValue.includes(".") || currentValue === "-")
      ) {
        return;
      }

      if (currentValue === "0" && value !== ".") {
        currentValue = "";
      }

      currentValue = `${currentValue}${value}`;
      setCalculatorValues({
        ...calculatorValues,
        screenValue: currentValue,
      });
    }
  };

  const setOperation = (operation) => {
    if (operation === "-" && calculatorValues.screenValue === "0") {
      inputValue(operation);
      return;
    }

    if (calculatorValues.operation) return;

    setCalculatorValues({
      ...calculatorValues,
      screenValue: "0",
      addend: calculatorValues.screenValue,
      operation: operation,
    });
  };

  const getResult = () => {
    if (!calculatorValues.operation) {
      alert("Nothing to solve!");
      return;
    }

    const operation = calculatorValues.operation;
    const addend1 = calculatorValues.addend;
    const addend2 = calculatorValues.screenValue;

    let result;
    switch (operation) {
      case "+":
        result = parseFloat(addend1) + parseFloat(addend2);
        break;
      case "-":
        result = parseFloat(addend1) - parseFloat(addend2);
        break;
      case "/":
        result = parseFloat(addend1) / parseFloat(addend2);
        break;
      case "x":
        result = parseFloat(addend1) * parseFloat(addend2);
        break;

      default:
        alert("ERROR!");
    }

    setCalculatorValues({
      operation: "",
      screenValue: `${result}`,
      addend: addend2,
    });
  };

  const reset = () => {
    setCalculatorValues({
      operation: "",
      screenValue: "0",
      addend: "",
    });
  };

  const del = () => {
    let sv = calculatorValues.screenValue;

    sv = sv.slice(0, sv.length - 1);

    if (!sv.length) {
      sv = "0";
    }

    setCalculatorValues({
      ...calculatorValues,
      screenValue: sv,
    });
  };
  return (
    <>
      <Container t={theme}>
        <GlobalStyle />
        <Calculator>
          <StyledHeader t={theme}>
            <h1>calcu</h1>
            <ThemeControl>
              <ThemeButton changeTheme={changeThemeHanler} t={theme} />
            </ThemeControl>
          </StyledHeader>
          <Screen t={theme} result={calculatorValues.screenValue}></Screen>
          <Keypad t={theme}>
            <Button
              t1={theme}
              t2={2}
              click={inputValue}
              area="seven"
              name="7"
            />
            <Button
              t1={theme}
              t2={2}
              click={inputValue}
              area="eight"
              name="8"
            />
            <Button t1={theme} t2={2} click={inputValue} area="nine" name="9" />
            <Button t1={theme} t2={0} click={del} area="del" name="DEL" />

            <Button t1={theme} t2={2} click={inputValue} area="four" name="4" />
            <Button t1={theme} t2={2} click={inputValue} area="five" name="5" />
            <Button t1={theme} t2={2} click={inputValue} area="six" name="6" />
            <Button
              t1={theme}
              t2={2}
              click={setOperation}
              area="add"
              name="+"
            />

            <Button t1={theme} t2={2} click={inputValue} area="one" name="1" />
            <Button t1={theme} t2={2} click={inputValue} area="two" name="2" />
            <Button
              t1={theme}
              t2={2}
              click={inputValue}
              area="three"
              name="3"
            />
            <Button
              t1={theme}
              t2={2}
              click={setOperation}
              area="sub"
              name="-"
            />

            <Button
              t1={theme}
              t2={2}
              click={inputValue}
              area="point"
              name="."
            />
            <Button t1={theme} t2={2} click={inputValue} area="zero" name="0" />
            <Button
              t1={theme}
              t2={2}
              click={setOperation}
              area="div"
              name="/"
            />
            <Button
              t1={theme}
              t2={2}
              click={setOperation}
              area="mul"
              name="x"
            />

            <Button t1={theme} t2={0} click={reset} area="reset" name="RESET" />

            <Button t1={theme} t2={1} click={getResult} area="equal" name="=" />
          </Keypad>
        </Calculator>
      </Container>
      <Attributes />
    </>
  );
}

export default App;
