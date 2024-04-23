import s from "./firstLine.module.scss";
export const FirstLine = () => {
  return (
    <div className={s.FirstLine}>
      <div className={s.fobKz}>
        <div className={s.text}>
          <div className={s.headerText}>
            <h1 className={s.titleFPB}>
              Factoring on <br /> Blockchain
            </h1>
            <p className={s.subtitle}>
              Платформа для токенизации <br /> обязательств об оплате перед
              <br />
              дистрибьюторами
            </p>
          </div>

          <h3 className={s.link}>FPB.KZ</h3>
        </div>
      </div>

      <div className={s.uwboOrg}>
        <div className={s.text}>
          <div className={s.headerText}>
            <h1 className={s.titleDAO}>
              DAO - United World Blockchain Organization
            </h1>
            <p className={s.subtitle}>
              Сервис для голосования мировых блокчейн ассоциаций по важным
              отраслевым вопросам
            </p>
          </div>
          <div>
            <h3 className={s.link}>uwbo.org</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
