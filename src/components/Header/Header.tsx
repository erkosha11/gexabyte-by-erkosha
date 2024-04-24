import { useState } from "react";

import Logo from "../../assets/icons/Logo.svg";
import BurgerMenuImg from "../../assets/icons/menu-hamburger.svg";

import BurgerMenu from "./components/BurgerMenu/BurgerMenuHeader";
import LanguageSelect from "./components/LanguageSelect/LanguageSelect";

import s from "./Header.module.scss";

export const Header = () => {
  const [isMenuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!isMenuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className={s.header}>
      <div className="container">
        <div className={s.headerContent}>
          <img className={s.headerLogo} src={Logo} alt="logo"></img>
          <div className={s.headerNav}>
            <ul>
              <li>
                <h5>О НАС</h5>
              </li>
              <li>
                <h5>ПРОЕКТЫ</h5>
              </li>
              <li>
                <h5>ЦИФРЫ</h5>
              </li>
              <li>
                <h5>ПАРТНЕРЫ</h5>
              </li>
              <li>
                <h5>КОНТАКТЫ</h5>
              </li>
            </ul>
          </div>
          <div className={s.headerBurgerMenu} onClick={toggleMenu}>
            <img
              className={s.headerBurgerMenuLogo}
              src={BurgerMenuImg}
              alt="BurgerMenu"
            />
          </div>
          <BurgerMenu isOpen={isMenuActive} onClose={closeMenu} />
          <div className={s.languageSelector}>
            <LanguageSelect defaultValue="RUS" handleChange={handleChange} />
          </div>
        </div>
      </div>
    </div>
  );
};
