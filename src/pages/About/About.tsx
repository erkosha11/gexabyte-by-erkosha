import React from "react";
import s from "./About.module.scss";
import AboutCards from "./components/AboutCards";

export const About = () => {
  return (
    <div className={s.about}>
      <div className="container">
        <div className={s.aboutContent}>
          <AboutCards />
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
