import s from "./fourthLine.module.scss";

export default function FourthLine() {
  return (
    <div className={s.fourthLine}>
      <div className={s.infrastructureForBlockchainProjects}>
        <div className={s.text}>
          <div className={s.headerText}>
            <h1 className={s.title}>Инфраструктура для блокчейн-проектов</h1>
          </div>
          <h3 className={s.link}>NDA</h3>
        </div>
      </div>

      <div className={s.decentralizedCloudStorageAggregator}>
        <div className={s.text}>
          <div className={s.headerText}>
            <h1 className={s.title}>
              Децентрализованный агрегатор облачных хранилищ
            </h1>
          </div>
          <div>
            <h3 className={s.link}>NDA</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
