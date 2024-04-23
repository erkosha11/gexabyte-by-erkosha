import s from "./eighthLine.module.scss";

export default function EighthLine() {
  return (
    <div className={s.sixthLine}>
      <div className={s.tokenomicsForGame}>
        <div className={s.text}>
          <div className={s.headerText}>
            <h1 className={s.title}>Токеномика для игры Play2Earn</h1>
          </div>
          <div>
            <h3 className={s.link}>nda</h3>
          </div>
        </div>
      </div>
      <div className={s.tokenomicsbBitcoinNetworkHashrate}>
        <div className={s.text}>
          <div className={s.headerText}>
            <h1 className={s.title}>
              Токеномика для проекта <br /> аренды хэшрейта сети <br /> Bitcoin
            </h1>
          </div>

          <h3 className={s.link}>nda</h3>
        </div>
      </div>
    </div>
  );
}
