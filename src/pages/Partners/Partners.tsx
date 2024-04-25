import s from "./Partners.module.scss";

import { PartnersCards } from "./components/partnersCards";

export const Partners = () => {
  return (
    <section className="Partners" id="Partners">
      <div className={s.partners}>
        <div className="container">
          <div className={s.partnersContent}>
            <div className={s.partnersTitle}>
              <h2>наши партнеры</h2>
            </div>
            <div className={s.partnersLogos}>
              <PartnersCards />
              <PartnersCards />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
