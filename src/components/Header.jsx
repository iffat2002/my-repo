import "../styles/components/header.css";

const Header = () => {
  return (
    <header>
      <div className="box">
        <div className="header-content">
            <div className="left-side">
                <div className="logo"></div>
                <a>DOCS</a>
                <a className="second-link">WHITEPAPER</a>
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
