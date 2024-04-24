import s from "./thirdLineWeb2.module.scss";

export default function ThirdLineWeb2() {
  return (
    <div className={s.ThirdLineWeb2}>
      <div className={s.saimanKz}>
        <div className={s.text}>
          <div className={s.headerText}>
            <h1 className={s.title}>
              АВТОМАТИЗИРОВАННАЯ СИСТЕМА УПРАВЛЕНИЯ НАРУЖНЫМ ОСВЕЩЕНИЕМ
            </h1>
          </div>
          <h3 className={s.link}>saiman.kz</h3>
        </div>
      </div>

      <div className={s.saimanKz2}>
        <div className={s.text}>
          <div className={s.headerText}>
            <h1 className={s.title}>
              ПРИЛОЖЕНИЯ ДЛЯ СЧИТЫВАНИЯ ДАННЫХ <br /> С СЧЕТЧИКА
            </h1>
          </div>
          <div>
            <h3 className={s.link}>saiman.kz</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
