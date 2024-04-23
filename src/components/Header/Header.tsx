import s from "./Header.module.scss";
import Logo from "../../assets/icons/Logo.svg";

export const Header = () => {
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
              <li><h5>О НАС</h5></li>
              <li><h5>ПРОЕКТЫ</h5></li>
              <li><h5>ЦИФРЫ</h5></li>
              <li><h5>ПАРТНЕРЫ</h5></li>
              <li><h5>КОНТАКТЫ</h5></li>
            </ul>
          </div>
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
