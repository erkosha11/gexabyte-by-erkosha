import s from "../Partners.module.scss";

import AstanaHubImg from "../../../assets/img/image 41.svg";
import DarImg from "../../../assets/img/image 42.svg";
import BinnovationsImg from "../../../assets/img/image 43.svg";
import DatcomImg from "../../../assets/img/image 44.svg";
import BiGroupImg from "../../../assets/img/image 45.svg";
import BlockchairImg from "../../../assets/img/image 45 (1).svg";

import VesovayaImg from "../../../assets/img/image 46.svg";
import GrupovinaImg from "../../../assets/img/image 47.svg";
import ThisBerryImg from "../../../assets/img/image 48.svg";
import SenimImg from "../../../assets/img/image 49.svg";
import SaimanImg from "../../../assets/img/image 50.svg";
import GmtLegalImg from "../../../assets/img/image 56.svg";

import VisionImg from "../../../assets/img/image 51.svg";
import MarketImg from "../../../assets/img/image 52.svg";
import SteppeImg from "../../../assets/img/image 54.svg";
import CooiImg from "../../../assets/img/image 55.svg";
import HexensImg from "../../../assets/img/image 55 (1).svg";
import EvaImg from "../../../assets/img/image 55 (2).svg";

import MidasImg from "../../../assets/img/Midas.svg";
import InfinityTechImg from "../../../assets/img/infinity tech.svg";
import PetaboxImg from "../../../assets/img/petabox.svg";
import MetalampImg from "../../../assets/img/MetaLamp.svg";
import Blaize from "../../../assets/img/Blaize.svg";

import QamalladinImg from "../../../assets/img/Qamalladin.svg";
import SDUImg from "../../../assets/img/Sdu.svg";
import ColdstackImg from "../../../assets/img/coldstack.svg";
import CryphonStudioImg from "../../../assets/img/cryptonStudio.svg";
import VasoftImg from "../../../assets/img/vasoft.svg";

import ItUniversityImg from "../../../assets/img/ItUniversity.svg";
import OmisoftImg from "../../../assets/img/omisoft.svg";
import NomiumImg from "../../../assets/img/nomium.svg";
import RedlabImg from "../../../assets/img/redlab.svg";
import AobtdImg from "../../../assets/img/AOBTD.svg";

export const PartnersCards = () => {
  return (
    <div className={s.partnersCards}>
      <div className={s.partnersCard}>
        <img src={AstanaHubImg} alt="" />
        <img src={VesovayaImg} alt="" />
        <img src={VisionImg} alt="" />
      </div>

      <div className={s.partnersCard}>
        <img src={DarImg} alt="" />
        <img src={GrupovinaImg} alt="" />
        <img src={MarketImg} alt="" />
      </div>

      <div className={s.partnersCard}>
        <img src={BinnovationsImg} alt="" />
        <img src={ThisBerryImg} alt="" />
        <img src={SteppeImg} alt="" />
      </div>

      <div className={s.partnersCard}>
        <img src={DatcomImg} alt="" />
        <img src={SenimImg} alt="" />
        <img src={CooiImg} alt="" />
      </div>

      <div className={s.partnersCard}>
        <img src={BiGroupImg} alt="" />
        <img src={SaimanImg} alt="" />
        <img src={HexensImg} alt="" />
      </div>

      <div className={s.partnersCard}>
        <img src={BlockchairImg} alt="" />
        <img src={GmtLegalImg} alt="" />
        <img src={EvaImg} alt="" />
      </div>
      <div className={s.partnersCard}>
        <img src={MidasImg} alt="" />
        <img src={QamalladinImg} alt="" />
        <img src={ItUniversityImg} alt="" />
      </div>

      <div className={s.partnersCard}>
        <img src={InfinityTechImg} alt="" />
        <img src={SDUImg} alt="" />
        <img src={OmisoftImg} alt="" />
      </div>
      <div className={s.partnersCard}>
        <img src={PetaboxImg} alt="" />
        <img src={ColdstackImg} alt="" />
        <img src={NomiumImg} alt="" />
      </div>

      <div className={s.partnersCard}>
        <img src={MetalampImg} alt="" />
        <img src={CryphonStudioImg} alt="" />
        <img src={RedlabImg} alt="" />
      </div>

      <div className={s.partnersCard}>
        <img src={Blaize} alt="" />
        <img src={VasoftImg} alt="" />
        <img src={AobtdImg} alt="" />
      </div>
    </div>
  );
};
