import s from "./fourthLineWeb2.module.scss";

export default function FourthLineWeb2() {
  return (
    <div className={s.FourthLineWeb2}>
      <div className={s.datcomKz}>
        <div className={s.text}>
          <div className={s.headerText}>
            <h1 className={s.title}>
              СЕРВИС ДОКУМЕНТООБОРОТА ДЛЯ ВЗАИМОДЕЙСТВИЯ ЮРИДИЧЕСКИХ ЛИЦ
            </h1>
          </div>
          <h3 className={s.link}>datcom.kz</h3>
        </div>
      </div>

      <div className={s.paymentSystem}>
        <div className={s.text}>
          <div className={s.headerText}>
            <h1 className={s.title}>ПЛАТЕЖНАЯ СИСТЕМА</h1>
            <p className={s.subtitle}>
              Программное обеспечение для автомобильных весов
            </p>
          </div>
          <div>
            <h3 className={s.link}>nda</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
