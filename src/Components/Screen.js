import { StyledScreen } from "./Screen.style";

const Screen = ({ className, result }) => {
  const [wholeNumber, factorial] = result.split(".");
  const resultWithComas = `${wholeNumber.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ","
  )}${factorial ? `.${factorial}` : ""}`;

  return (
    <div className={className}>
      <p>{resultWithComas}</p>
    </div>
  );
};

export default StyledScreen(Screen);
