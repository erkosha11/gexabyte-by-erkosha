import EighthLine from "./eighthLine/eighthLine";
import FifthLine from "./fifthLine/fifthLine";
import { FirstLine } from "./firstLine/firstLine";
import FourthLine from "./fourthLine/fourthLine";
import s from "./ourProject.module.scss";
import SecondLine from "./secondLine/secondLine";
import SeventhLine from "./seventhLine/seventhLine";
import SixthLine from "./sixthLine/sixthLine";
import ThirdLine from "./thirdLine/thirdLine";
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
