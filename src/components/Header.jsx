import Moon from "../assets/svgs/Moon";
import "../styles/components/header.css";
import ScrambleText from "./ScrambleText";
import Logo from "../assets/imgs/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="box">
        <div className="header-content">
          <div className="left-side">
            <div className="logo">
              <img src={Logo} alt="" />
            </div>
            <a>
              <ScrambleText text="DOCS" />
            </a>
            <a className="second-link">
              <ScrambleText text="WHITEPAPER" />{" "}
            </a>
          </div>
          <div className="right-side">
            <div className="social-icon">
              <Moon />
            </div>
            <div className="social-icon">
              <Moon />
            </div>
            <div className="social-icon">
              <Moon />
            </div>
            <div className="social-icon">
              <Moon />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
