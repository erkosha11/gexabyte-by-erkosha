import s from "./leadership.module.scss";

export const Leadership = () => {
  return (
    <div className={s.leadership}>
      <div className="container">
        <div className={s.leadershipContent}>
          <h2>Лидерство в <br /> цифровых инновациях</h2>
          <div className={s.blockIndicators}>
            <div className={s.successfulProjects}>
              <h1 className={s.numbers}>200+</h1>
              <p className={s.subtitle}>успешных проектов</p>
            </div>
            <div className={s.experience}>
              <h1 className={s.numbers}>7+</h1>
              <p className={s.subtitle}>опыта в <br /> разработке</p>
            </div>
            <div className={s.capitalization}>
              <h1 className={s.numbers}>1 млрд$</h1>
              <p className={s.subtitle}>
                капитализация реализованных <br /> проектов более
              </p>
            </div>
            <div className={s.percentageOfRecommendations}>
              <h1 className={s.numbers}>90%</h1>
              <p className={s.subtitle}>
                компаний рекомендуют <br />
                нас после сдачи проекта
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
