import Image from '../components/Image';
import logoSrc from '../img/logo.png';
import Nav from '../components/Nav';
import FacebookIcon from '../img/facebook2.svg?react';
import InstagramIcon from '../img/instagram.svg?react';
import PhoneIcon from '../img/phone.svg?react';
import EmailIcon from '../img/envelope-o.svg?react';
import TiktokIcon from '../img/tiktok.svg?react';
import Icon from '../components/Icon';

const Footer = () => {
  const navArr = [
    { name: 'მთავარი', link: '#main', id: '1' },
    { name: 'ჩვენს შესახებ', link: '#about', id: '2' },
    { name: 'სერვისები', link: '#services', id: '3' },
    { name: 'კონტაქტი', link: '#contact', id: '4' },
  ];
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer__top">
          <div className="footer__logo-container">
            <a href="https://www.ezograph.ge" className="footer__logo-link">
              <Image src={logoSrc} alt="Logo" className="footer__logo" />
            </a>
          </div>
          <Nav arr={navArr} className="footer" />
          <div className="footer__social-media">
            <div className="footer__icon-container">
              <a
                href="https://www.facebook.com/profile.php?id=100084029234488&mibextid=ZbWKwL"
                className="footer__social-link"
                aria-label='Ezography Facebook page'
              >
                <Icon icon={<FacebookIcon />} />
              </a>
            </div>
            <div className="footer__icon-container">
              <a
                href="https://www.instagram.com/ezography_giorgi?igsh=MTM5enhseDU5cXYxOQ=="
                className="footer__social-link"
                aria-label='Ezography Instagram page'
              >
                <Icon icon={<InstagramIcon />} />
              </a>
            </div>
            <div className="footer__icon-container">
              <a
                href="https://www.tiktok.com/@ezography?_t=8q4rGRyn8Iy&_r=1"
                className="footer__social-link"
                aria-label='Ezography Tiktok page'
              >
                <Icon icon={<TiktokIcon />} />
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
