import { Button } from "../../shared/ui/Button/Button";
import HomeImg from "../../assets/img/HomeImg.svg";
import Arrow from "../../assets/icons/Arrow.svg";
import s from "./Home.module.scss";

export const Home = () => {
  return (
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
                Оптимизируйте свой бизнес с использованием передовых технологий
              </p>
              <Button>
                Начать сотрудничество <img src={Arrow} alt="arrow" />
              </Button>
            </div>
          </div>
          <img src={HomeImg} alt="home" />
        </div>
      </div>
    </div>
  );
};
