import { StyledButton } from "./Button.style";

const Button = ({ className, name, click }) => {
  return (
    <button className={className} onClick={() => click(name)}>
      {name}
    </button>
  );
};

export default StyledButton(Button);
