import s from "./thirdLine.module.scss";

export default function ThirdLine() {
  return (
    <div className={s.thirdLine}>

      <div className={s.astanaHub}>
        <div className={s.text}>
          <div className={s.headerText}>
            <h1 className={s.title}>Astana Hub: Social coin</h1>
            <p className={s.subtitle}>
              Единая платформа, которая стимулирует пользователей правильным
              способом платформы для обучения, стажировки, создание команды,
              прохождение акселерации.
            </p>
          </div>
          <h3 className={s.link}>ссылка</h3>
        </div>
      </div>

      <div className={s.euphoriaGames}>
        <div className={s.text}>
          <div className={s.headerText}>
            <h1 className={s.title}>euphoria <br /> Games MVP</h1>
            <p className={s.subtitle}>Децентрализованная платформа для игр</p>
          </div>
          <h3 className={s.link}>Euphoria.Games</h3>
        </div>
      </div>

      <div className={s.uSTAKING}>
        <div className={s.text}>
          <div className={s.headerText}>
            <h1 className={s.title}>uSTAKING</h1>
            <p className={s.subtitle}>
              Децентрализованная платформа для стейкинга
            </p>
          </div>
          <h3 className={s.link}>ustaking.io</h3>
        </div>
      </div>
    </div>
  );
}
