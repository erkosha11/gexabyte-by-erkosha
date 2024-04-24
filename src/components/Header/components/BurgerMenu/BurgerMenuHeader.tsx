import React from "react";
import s from "../../Header.module.scss";

interface BurgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className={s.BurgerMenuOverlay} onClick={onClose}>
          <div className={s.BurgerMenu}>
            <div className={s.burgerMenuList}>
              <div className={s.headerBurgerMenu}>
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
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BurgerMenu;
