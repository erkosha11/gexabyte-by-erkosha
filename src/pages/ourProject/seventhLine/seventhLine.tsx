import s from "./seventhLine.module.scss";

export default function SeventhLine() {
  return (
    <div className={s.seventhLine}>
        
      <div className={s.NFTMarketplace}>
        <div className={s.text}>
          <div className={s.headerText}>
            <h1 className={s.title}>NFT-маркетплейс</h1>
            <p className={s.subtitle}>
              Платформа для создания, отправки, покупки, продажи, аренды NFT
            </p>
          </div>
          <h3 className={s.link}>NDA</h3>
        </div>
      </div>

      <div className={s.crowdfundingPlatform}>
        <div className={s.text}>
          <div className={s.headerText}>
            <h1 className={s.title}>Краудфандинговая платформа</h1>
            <p className={s.subtitle}>
            Cервис для сбора средств на проекты в токенах
            </p>
          </div>
          <div>
            <h3 className={s.link}>NDA</h3>
          </div>
        </div>
      </div>

    </div>
  );
}
