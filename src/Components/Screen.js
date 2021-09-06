import { StyledScreen } from "./Screen.style";

const Screen = ({ className, result }) => {
  return (
    <div className={className}>
      <p>{result}</p>
    </div>
  );
};

export default StyledScreen(Screen);
