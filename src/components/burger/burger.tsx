import "./burgerStyle.css";

export const BurgetButton = () => {
  return (
    <label className="burger-label" htmlFor="burger-checkbox">
      <input type="checkbox" name="burger-checkbox" id="burger-checkbox" />
      <span className="burger-bar"></span>
      <span className="burger-bar"></span>
      <span className="burger-bar"></span>
    </label>
  );
};
