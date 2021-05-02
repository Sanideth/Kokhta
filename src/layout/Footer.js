import Image from "../components/Image";
import logoSrc from "../img/logo.png";
import Nav from "../components/Nav";
import { ReactComponent as FacebookIcon } from "../img/facebook2.svg";
import { ReactComponent as InstagramIcon } from "../img/instagram.svg";
import { ReactComponent as PhoneIcon } from "../img/phone.svg";
import { ReactComponent as EmailIcon } from "../img/envelope-o.svg";
import Icon from "../components/Icon";

const Footer = () => {
  const navArr = [
    { name: "მთავარი", link: "#main", id: "1" },
    { name: "ჩვენს შესახებ", link: "#about", id: "2" },
    { name: "სერვისები", link: "#services", id: "3" },
    { name: "კონტაქტი", link: "#contact", id: "4" },
  ];
  return (
    <footer className="footer" id="contact">
      <div className="container">
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
        <div className="footer__contact">
          <div className="footer__phone">
            <div className="footer__contact-icon-container">
              <Icon icon={<PhoneIcon />} />
            </div>
            <div className="footer__contact-text-container">
              <a href="tel:+995 598 18 00 91" className="footer__contact-link">
                +995 598 18 00 91
              </a>
            </div>
          </div>
          <div className="footer__email">
            <div className="footer__contact-icon-container">
              <Icon icon={<EmailIcon />} />
            </div>
            <div className="footer__contact-text-container">
              <a
                href="mailto: g.zurabiani@hotmail.com"
                className="footer__contact-link"
              >
                g.zurabiani@hotmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
