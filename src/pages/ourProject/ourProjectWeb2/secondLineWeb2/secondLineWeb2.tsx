import s from "./secondLineWeb2.module.scss";

export default function SecondLineWeb2() {
  return (
    <div className={s.secondLineWeb2}>
      <div className={s.aiBot}>
        <div className={s.text}>
          <div className={s.headerText}>
            <h1 className={s.title}>ИИ БОТ</h1>
            <p className={s.subtitle}>
              Инновационный бот, обладающий способностью анализировать
              содержание веб-сайтов и автоматически отбирать видеоматериалы из
              публичных источников
            </p>
          </div>
          <h3 className={s.link}>nda</h3>
        </div>
      </div>

      <div className={s.vesovayaKz}>
        <div className={s.text}>
          <div className={s.headerText}>
            <h1 className={s.title}>
              ПО ДЛЯ <br /> АВТОМОБИЛЬНЫХ ВЕСОВ
            </h1>
            <p className={s.subtitle}>
              Программное обеспечение для <br /> автомобильных весов
            </p>
          </div>
          <div>
            <h3 className={s.link}>vesovaya.kz</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
