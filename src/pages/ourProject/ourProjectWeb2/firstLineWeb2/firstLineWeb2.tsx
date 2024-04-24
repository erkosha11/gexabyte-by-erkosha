import s from "./firstLineWeb2.module.scss";
export const FirstLineWeb2 = () => {
  return (
    <div className={s.FirstLineWeb2}>
      <div className={s.cofiRu}>
        <div className={s.text}>
          <div className={s.headerText}>
            <h3 className={s.title}>КРАУДЛЕНИНГОВАЯ <br /> ПЛАТФОРМА</h3>
            <p className={s.subtitle}>
              Сервис для финансирования, который <br /> позволяет предпринимателям
              быстро <br />получать займы от инвесторов напрямую
            </p>
          </div>

          <h4 className={s.link}>Cofi.ru</h4>
        </div>
      </div>

      <div className={s.grupovina}>
        <div className={s.text}>
          <div className={s.headerText}>
            <h3 className={s.title}>ДОРАБОТКА ПЛАТФОРМЫ GRUPOVINA</h3>
            <p className={s.subtitle}>
              Сервис, предлагающий скидки,<br /> акции и купоны на различные услуги
            </p>
          </div>
          <div>
            <h4 className={s.link}>GRUPOVINA.RS</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
