import { Button } from "../../shared/ui/Button/Button";
import HomeImg from "../../assets/img/HomeImg.svg";
import Arrow from "../../assets/icons/Arrow.svg";
import s from "./Home.module.scss";

export const Home = () => {
  return (
    <section className="Home">
      <div className={s.home}>
        <div className="container">
          <div className={s.homeContent}>
            <div className={s.homeText}>
              <h1>
                ПРОГРАММИРУЕМ БУДУЩЕЕ:
                <br />
                <span>ОТ WEB2 ДО WEB3</span>
              </h1>
              <div className={s.homeSubtitle}>
                <p>
                  Оптимизируйте свой бизнес с использованием передовых
                  технологий
                </p>
                <a href="#Contacts">
                  <Button>
                    <h4>Начать сотрудничество</h4>{" "}
                    <img src={Arrow} alt="arrow" />
                  </Button>
                </a>
              </div>
            </div>
            <img className={s.homeImg} src={HomeImg} alt="home" />
          </div>
        </div>
      </div>
    </section>
  );
};
