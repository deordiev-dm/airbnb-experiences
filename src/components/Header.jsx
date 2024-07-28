import airbnbLogo from "../../public/airbnb-logo.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <img src={airbnbLogo} alt="airbnb Logo" />
        </div>
      </div>
    </header>
  );
}
