import { useState } from "react";

import Logo from "../../assets/icons/Logo.svg";

import BurgerMenuImg from "../../assets/icons/menu-hamburger.svg";
import BurgerMenu from "./components/BurgerMenuHeader";

import s from "./Header.module.scss";


export const Header = () => {
  const [isMenuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!isMenuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  const changeLanguage = (lang: string) => {
    console.log("Выбран язык:", lang);
  };

  return (
    <div className={s.header}>
      <div className="container">
        <div className={s.headerContent}>
          <img src={Logo} alt="logo"></img>
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
            <img src={BurgerMenuImg} alt="BurgerMenu" />
          </div>
          <BurgerMenu isOpen={isMenuActive} onClose={closeMenu} />
          <div className={s.languageSelector}>
            <select onChange={(e) => changeLanguage(e.target.value)}>
              <option value="RUS">RUS</option>
              <option value="KAZ">KAZ</option>
              <option value="ENG">ENG</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
