import { StyledThemeButton } from "./ThemeButton.style";

const ThemeButton = ({ className, changeTheme }) => {
  return (
    <div className={className} onClick={changeTheme}>
      <div></div>
    </div>
  );
};

export default StyledThemeButton(ThemeButton);
