import Image from "../components/Image";
import srcLogo from "../img/logo.png";
import Nav from "../components/Nav";
import Heading from "../components/Heading";

const navArr = [
  { name: "მთავარი", link: "#link-1", id: "1" },
  { name: "ჩვენს შესახებ", link: "#link-2", id: "2" },
  { name: "სერვისები", link: "#link-3", id: "3" },
  { name: "კონტაქტი", link: "#link-4", id: "4" },
];

const Header = () => {
  return (
    <header className="header">
      <div className="header__top">
        <div className="header__logo-container">
          <a href="https://www.kokhtad.ge" className="header__logo-link">
            <Image src={srcLogo} alt="Logo" className="header__logo" />
          </a>
        </div>
        <Nav arr={navArr} className="header" />
      </div>
      <div className="header__hero">
        <Heading
          element="h1"
          className="heading-primary"
          text="კოხტად.ჯი - შენი კომფორტის სერვისი."
        />
      </div>
    </header>
  );
};

export default Header;
