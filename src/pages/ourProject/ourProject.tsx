import EighthLine from "./ourProjectWeb3/eighthLine/eighthLine";
import FifthLine from "./ourProjectWeb3/fifthLine/fifthLine";
import { FirstLine } from "./ourProjectWeb3/firstLine/firstLine";
import FourthLine from "./ourProjectWeb3/fourthLine/fourthLine";
import s from "./ourProject.module.scss";
import SecondLine from "./ourProjectWeb3/secondLine/secondLine";
import SeventhLine from "./ourProjectWeb3/seventhLine/seventhLine";
import SixthLine from "./ourProjectWeb3/sixthLine/sixthLine";
import ThirdLine from "./ourProjectWeb3/thirdLine/thirdLine";
export default function OurProject() {
  return (
    <div className={s.ourProject}>
      <div className="container">
        <div className={s.headerBlock}> <h1>наши проекты</h1>
        <div className={s.buttonPageWeb}>
          <button className={s.web3}>web3 проекты</button>
          <button className={s.web2}>web2 проекты</button>
        </div>
        </div>
        <div className={s.OurProjectContent}>
        <FirstLine/>
        <SecondLine/>
        <ThirdLine/>
        <FourthLine/>
        <FifthLine/>
        <SixthLine/>
        <SeventhLine/>
        <EighthLine/>
        </div>
      </div>
    </div>
  );
}
