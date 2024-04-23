import s from "./secondLine.module.scss";

export default function SecondLine() {
  return (
    <div className={s.secondLine}>
      <div className={s.bloxxa}>
        <div className={s.text}>
          <div className={s.headerText}>
            <h1 className={s.title}>Bloxxa</h1>
            <p className={s.subtitle}>Конструктор веб3 приложений </p>
          </div>
          <h3 className={s.link}>bloxxa.tech</h3>
        </div>
      </div>

      <div className={s.tokenize}>
        <div className={s.text}>
          <div className={s.headerText}>
            <h1 className={s.title}>Tokenization Platform</h1>
            <p className={s.subtitle}>
              Платформа для токенизации реальных активов
            </p>
          </div>
          <div>
            <h3 className={s.link}>tokenize.kz</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
