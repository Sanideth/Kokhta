import Image from "../components/Image";
import logoSrc from "../img/logo.png";
import Nav from "../components/Nav";
import { ReactComponent as FacebookIcon } from "../img/facebook2.svg";
import { ReactComponent as InstagramIcon } from "../img/instagram.svg";
import Icon from "../components/Icon";

const Footer = () => {
  const navArr = [
    { name: "მთავარი", link: "#link-1", id: "1" },
    { name: "ჩვენს შესახებ", link: "#link-2", id: "2" },
    { name: "სერვისები", link: "#link-3", id: "3" },
    { name: "კონტაქტი", link: "#link-4", id: "4" },
  ];
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__logo-container">
          <a href="https://www.kokhtad.ge" className="footer__logo-link">
            <Image src={logoSrc} alt="Logo" className="footer__logo" />
          </a>
        </div>
        <Nav arr={navArr} className="footer" />
        <div className="footer__social-media">
          <div className="footer__icon-container">
            <a
              href="https://www.facebook.com/profile.php?id=100053058136440"
              className="footer__social-link"
            >
              <Icon icon={<FacebookIcon />} />
            </a>
          </div>
          <div className="footer__icon-container">
            <a
              href="https://www.instagram.com/kokhta_ezo_lechkhumshi/"
              className="footer__social-link"
            >
              <Icon icon={<InstagramIcon />} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
