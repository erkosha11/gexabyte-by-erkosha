import s from "./fifthLineWeb2.module.scss";

export default function FifthLineWeb2() {
  return (
    <div className={s.fifthLineWeb2}>
      <div className={s.yvisionKz}>
        <div className={s.text}>
          <div className={s.headerText}>
            <h1 className={s.title}>ИНФОРМАЦИОННЫЙ <br /> ПОРТАЛ</h1>
          </div>
          <h3 className={s.link}>yvision.kz</h3>
        </div>
      </div>

      <div className={s.zhiberKZ}>
        <div className={s.text}>
          <div className={s.headerText}>
            <h1 className={s.title}>СЕРВИС ДОСТАВКИ</h1>
            <p className={s.subtitle}>
              Интеграция с Яндекс доставкой, предоставляя современные и <br />
              эффективные функции для управления доставкой товара
            </p>
          </div>
          <div>
            <h3 className={s.link}>zhiber.kz</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
