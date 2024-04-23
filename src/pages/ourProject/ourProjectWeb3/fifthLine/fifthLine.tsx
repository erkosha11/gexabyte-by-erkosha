import s from "./fifthLine.module.scss";

export default function FifthLine() {
  return (
    <div className={s.fifthLine}>
      <div className={s.cryptoExchange}>
        <div className={s.text}>
          <div className={s.headerText}>
            <h1 className={s.title}>Криптобиржа</h1>
            <p className={s.subtitle}>Централизованная платформа для торговли криптовалютами </p>
          </div>
          <h3 className={s.link}>NDA</h3>
        </div>
      </div>

      <div className={s.musicPlatform}>
        <div className={s.text}>
          <div className={s.headerText}>
            <h1 className={s.title}>Музыкальная платформа</h1>
            <p className={s.subtitle}>
            Блокчейн-решение для артистов для монетизации контента
            </p>
          </div>
          <div>
            <h3 className={s.link}>NDA</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
