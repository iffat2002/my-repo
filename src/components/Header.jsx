import Moon from "../assets/svgs/Moon";
import "../styles/components/header.css";
import ScrambleText from "./ScrambleText";
import Logo from "../assets/imgs/logo.png";
import github from "../assets/imgs/github.png";
import twitter from "../assets/imgs/twitter.png";
import code from "../assets/imgs/code.png";

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
              <img src={github} alt="github" width={17} height={17} />
            </div>
            <div className="social-icon">
              <img src={twitter} alt="twitter" width={17} height={17}/>
            </div>
            <div className="social-icon">
              <img src={code} alt="twitter" width={17} height={17}/>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
