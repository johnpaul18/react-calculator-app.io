import { StyledThemeControl } from "./ThemeControl.style";

const ThemeControl = ({ className, children }) => {
  return (
    <div className={className}>
      <p style={{ margin: "10px" }}>THEME</p>
      {children}
    </div>
  );
};

export default StyledThemeControl(ThemeControl);
