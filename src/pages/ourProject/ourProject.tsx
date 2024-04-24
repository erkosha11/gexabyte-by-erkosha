import  { useState } from "react";
import s from "./ourProject.module.scss";
import OurProjectWeb2 from "./ourProjectWeb2/ourProjectWeb2";
import OurProjectWeb3 from "./ourProjectWeb3/ourProjectWeb3";

export default function OurProject() {

  const [activeBlock, setActiveBlock] = useState("web3");

  return (
    <div className={s.ourProject}>
      <div className="container">
        <div className={s.headerBlock}>
          <h1>наши проекты</h1>
          <div className={s.buttonPageWeb}>
           
            <button className={s.web3} onClick={() => setActiveBlock("web3")}>
              web3 проекты
            </button>
            <button className={s.web2} onClick={() => setActiveBlock("web2")}>
              web2 проекты
            </button>
          </div>
        </div>
        <div className={s.OurProjectContent}>
          
          {activeBlock === "web3" ? <OurProjectWeb3 /> : <OurProjectWeb2 />}
        </div>
      </div>
    </div>
  );
}
