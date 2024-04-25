import React, { useState } from "react";
import s from "../../Header.module.scss";

import Logo from "../../../../assets/icons/Logo.svg";
import CloseMenu from "../../../../assets/icons/CloseMenu.svg";

interface BurgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ isOpen, onClose }) => {
  const [selectedLang, setSelectedLang] = useState("RUS");

  const handleLangChange = (lang: string) => {
    setSelectedLang(lang);
  };

  return (
    <>
      {isOpen && (
        <div className={s.BurgerMenuOverlay} onClick={onClose}>
          <div className={s.BurgerMenu}>
            <div className={s.BurgerHeader}>
              <div>
                <img className={s.BurgerLogo} src={Logo} alt="" />
                <img className={s.BurgerClose} src={CloseMenu} alt="" />
              </div>
            </div>
            <div className={s.burgerMenuList}>
              <div className={s.headerBurgerMenuItems}>
                <ul>
                  <li>
                    <a href="#About">
                      <h5>О НАС</h5>
                    </a>
                  </li>
                  <li>
                    <a href="#Projects">
                      <h5>ПРОЕКТЫ</h5>
                    </a>
                  </li>
                  <li>
                    <a href="#Leadership">
                      <h5>ЦИФРЫ</h5>
                    </a>
                  </li>
                  <li>
                    <a href="#Partners">
                      <h5>ПАРТНЕРЫ</h5>
                    </a>
                  </li>
                  <li>
                    <a href="#Contacts">
                      <h5>КОНТАКТЫ</h5>
                    </a>
                  </li>
                </ul>
              </div>
              <div className={s.burgerMenuChangeLang}>
                <button
                  className={`${s.burgerMenuButtonLang} ${
                    selectedLang === "EN" ? s.active : ""
                  }`}
                  onClick={() => handleLangChange("EN")}
                >
                  EN
                </button>
                <button
                  className={`${s.burgerMenuButtonLang} ${
                    selectedLang === "RUS" ? s.active : ""
                  }`}
                  onClick={() => handleLangChange("RUS")}
                >
                  RUS
                </button>
                <button
                  className={`${s.burgerMenuButtonLang} ${
                    selectedLang === "KAZ" ? s.active : ""
                  }`}
                  onClick={() => handleLangChange("KAZ")}
                >
                  KAZ
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BurgerMenu;
