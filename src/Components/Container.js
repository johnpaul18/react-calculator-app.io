import { StyledContainer } from "./Container.style";

const Container = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

export default StyledContainer(Container);
