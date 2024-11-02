import Image from '../components/Image';
import srcLogo from '../img/logo.png';
import Nav from '../components/Nav';
import Heading from '../components/Heading';
import Button from '../components/Button';
import { useState } from 'react';

const navArr = [
  { name: 'მთავარი', link: '#main', id: '1' },
  { name: 'ჩვენს შესახებ', link: '#about', id: '2' },
  { name: 'სერვისები', link: '#services', id: '3' },
  { name: 'კონტაქტი', link: '#contact', id: '4' },
];

const Header = () => {
  const [navActive, setNavActive] = useState(false);

  const handleOnClick = () => {
    setNavActive(!navActive);
  };
  return (
    <header className={`header ${navActive ? 'header-active' : ''}`} id="main">
      <div className="container u-fl">
        <div className="header__top">
          <div className="header__logo-container">
            <a href="https://www.kokhtad.ge" className="header__logo-link">
              <Image src={srcLogo} alt="Logo" className="header__logo" />
            </a>
          </div>
          <Nav
            arr={navArr}
            className="header"
            navActive={navActive}
            onClick={handleOnClick}
          />
          <div className="header__nav-button-container">
            <button
              className={`btn btn-navigation ${
                navActive ? 'btn-navigation-active' : ''
              }`}
              onClick={handleOnClick}
            >
              <span
                className={`btn-span btn-span--1 ${
                  navActive ? 'span1-active' : ''
                }`}
              >
                &nbsp;
              </span>
              <span
                className={`btn-span btn-span--2 ${
                  navActive ? 'span2-deactive' : ''
                }`}
              >
                &nbsp;
              </span>
              <span
                className={`btn-span btn-span--3 ${
                  navActive ? 'span3-active' : ''
                }`}
              >
                &nbsp;
              </span>
            </button>
          </div>
        </div>
        <div className="header__bottom">
          <div className="header__heading-container">
            <Heading
              element="h1"
              className="heading-primary"
              text="ეზოგრაფი - შენი კომფორტის სერვისი"
            />
          </div>
          <div className="header__button-container">
            <Button
              className="btn-primary"
              content="გაიგე მეტი"
              href="#about"
              clickable={false}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
