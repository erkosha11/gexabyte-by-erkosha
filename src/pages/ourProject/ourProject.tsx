import s from "./ourProject.module.scss";
import OurProjectWeb3 from "./ourProjectWeb3/ourProjectWeb3";

export default function OurProject() {
  return (
    <div className={s.ourProject}>
      <div className="container">
        <div className={s.headerBlock}>
          {" "}
          <h1>наши проекты</h1>
          <div className={s.buttonPageWeb}>
            <button className={s.web3}>web3 проекты</button>
            <button className={s.web2}>web2 проекты</button>
          </div>
        </div>
        <div className={s.OurProjectContent}>
          <OurProjectWeb3 />
        </div>
      </div>
    </div>
  );
}
