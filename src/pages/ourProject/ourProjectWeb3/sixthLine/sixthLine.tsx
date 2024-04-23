import s from "./sixthLine.module.scss";

export default function SixthLine() {
  return (
    <div className={s.sixthLine}>
      <div className={s.socialNetwork}>
        <div className={s.text}>
          <div className={s.headerText}>
            <h1 className={s.title}>Социальная сеть</h1>
            <p className={s.subtitle}>
              Децентрализованная социальная сеть <br /> с распределенным хранением
              данных
            </p>
          </div>
          <div>
            <h3 className={s.link}>nda</h3>
          </div>
        </div>
      </div>
      <div className={s.decentralizedWallet}>
        <div className={s.text}>
          <div className={s.headerText}>
            <h1 className={s.title}>Децентрализованный <br /> кошелек</h1>
            <p className={s.subtitle}>
              Агрегатор кошельков DeFi с сервисами: <br /> Добавления ликвидности, DeFi
              staking, <br /> DeFi swap (обмен)
            </p>
          </div>

          <h3 className={s.link}>nda</h3>
        </div>
      </div>
    </div>
  );
}
