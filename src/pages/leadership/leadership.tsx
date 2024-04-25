import { useAnimatedCounter } from "../../shared/react-hock/useAnimatedCounter";
import { useOnScreen } from "../../shared/react-hock/useOnScreen";
import s from "./leadership.module.scss";

export const Leadership = () => {
  const { ref, isVisible } = useOnScreen({ threshold: 0.5 });
  const successfulProjects = useAnimatedCounter(isVisible ? "200+" : "0", 2000);
  const yearsOfExperience = useAnimatedCounter(isVisible ? "7+" : "0", 1500);
  const percentageOfRecommendations = useAnimatedCounter(
    isVisible ? "90%" : "0",
    1000
  );

  return (
    <section className="Leadership" id="Leadership">
      <div className={s.leadership} ref={ref}>
        <div className="container">
          <div className={s.leadershipContent}>
            <h2>
              Лидерство в <br /> цифровых инновациях
            </h2>
            <div className={s.blockIndicators}>
              <div className={s.successfulProjects}>
                <h1 className={s.numbers}>{successfulProjects}+</h1>
                <p className={s.subtitle}>успешных проектов</p>
              </div>
              <div className={s.experience}>
                <h1 className={s.numbers}>{yearsOfExperience}+</h1>
                <p className={s.subtitle}>
                  опыта в <br /> разработке
                </p>
              </div>
              <div className={s.capitalization}>
                <h1 className={s.numbers}>1 млрд$</h1>
                <p className={s.subtitle}>
                  капитализация реализованных <br /> проектов более
                </p>
              </div>
              <div className={s.percentageOfRecommendations}>
                <h1 className={s.numbers}>{percentageOfRecommendations}%</h1>
                <p className={s.subtitle}>
                  компаний рекомендуют <br />
                  нас после сдачи проекта
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
