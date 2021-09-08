import { StyledScreen } from "./Screen.style";

const Screen = ({ className, result }) => {
  const resultWithComas = result.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <div className={className}>
      <p>{resultWithComas}</p>
    </div>
  );
};

export default StyledScreen(Screen);
