import "../styles/components/header.css";
import ScrambleText from "./ScrambleText";

const Header = () => {
  return (
    <header>
      <div className="box">
        <div className="header-content">
            <div className="left-side">
                <div className="logo"></div>
                <a><ScrambleText text="DOCS" /></a>
                <a className="second-link"><ScrambleText text="WHITEPAPER" /> </a>
            </div>
            <div className="right-side">
                <div className="social-icon"></div>
                <div className="social-icon"></div>
                <div className="social-icon"></div>
                <div className="social-icon"></div>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
