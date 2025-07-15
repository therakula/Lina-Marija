import "./burgerStyle.css";

export const BurgerButton = () => {
  return (
    <label className="burger-label" htmlFor="burger-checkbox">
      <input type="checkbox" name="burger-checkbox" id="burger-checkbox" />
      <span className="burger-bar"></span>
      <span className="burger-bar"></span>
      <span className="burger-bar"></span>
    </label>
  );
};
