import s from "./About.module.scss";

export const About = () => {
  return (
    <div className={s.about}>
      <div className="container">
        <div className={s.aboutContent}>
          <div className={s.aboutButtons}>
            <span>Маркетплейсы</span>
            <span>Образовательные платформы</span>
            <span>Криптовалютные биржи</span>
            <span>Финтех продукты</span>
            <span>Финтех продукты</span>
            <span>CRM системы</span>
            <span>Launchpad платформы</span>
            <span>NFT-маркетплейсы</span>
          </div>
          <div className={s.aboutText}>
            <h2>Gexabyte</h2>
            <h5>
              аутсорсинговая IT-компания из Казахстана. Разрабатываем,
              поддерживаем и внедряем программное обеспечение для проектов из
              Америки, Европы и СНГ. Реализуем локальные и масштабные задачи в
              действующих и новых проектах, применяя современный технологический
              стек.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};
