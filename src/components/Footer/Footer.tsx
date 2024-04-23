import s from "./Footer.module.scss";

import Logo from "../../assets/icons/Logo.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Telegram from "../../assets/icons/teleram.svg";
import Linkedin from "../../assets/icons/linkedin.svg";

export const Footer = () => {
  return (
    <div className={s.footer}>
      <div className="container">
        <div className={s.footerContent}>
          <img className={s.footerLogo} src={Logo} alt="logo" />
          <div className={s.footerNav}>
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
          <div className={s.footerSocial}>
            <a href="https://www.instagram.com/">
              <img src={Instagram} alt="Instagram" />
            </a>
            <a href="https://t.me/">
              <img src={Telegram} alt="Telegram" />
            </a>
            <a href="https://www.linkedin.com/">
              <img src={Linkedin} alt="Linkedin" />
            </a>
          </div>
          <div className={s.footerRulesText}>
            <h5>&copy;&nbsp;2024&nbsp;Gexabyte. Все права защищены</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
