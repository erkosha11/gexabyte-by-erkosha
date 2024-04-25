import s from "./About.module.scss";
import AboutCards from "./components/AboutCards";

export const About = () => {
  return (
    <section className="About" id="About">
      <div className={s.about}>
        <div className="container">
          <div className={s.aboutContent}>
            <AboutCards />
            <div className={s.aboutText}>
              <h2>Gexabyte</h2>
              <h5>
                Инновационная компания-разработчик программного обеспечения,
                находящаяся на передовой технологического прогресса.
              </h5>
              <h5>
                Наш обширный опыт в реализации сложных проектов позволяет
                клиентам моделировать их видение в высококачественные продукты,
                воплощая передовые технологии блокчейна и современные
                веб-разработки в каждом решении.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
