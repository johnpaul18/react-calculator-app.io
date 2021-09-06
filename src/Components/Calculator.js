import { StyledCalculator } from "./Calculator.style";

const Calculator = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

export default StyledCalculator(Calculator);
