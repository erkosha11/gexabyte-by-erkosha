import s from "./Products.module.scss";

export const Products = () => {
  return (
    <div className={s.products}>
      <div className="container">
        <div className={s.productsContent}>
          <div className={s.productsTitle}>
            <h2>доверьтесь нам для решения ваших задач</h2>
            <div className={s.productsCards}>
              <div className={s.productsCard}>
                <div className={s.productsCardTitle}>
                  <h4>веб разработка</h4>
                </div>
                <div className={s.productsCardText}>
                  <p>Индивидуальный дизайн и разработка</p>
                  <span></span>
                  <p>Пользовательские веб-приложения и решения</p>
                  <span></span>
                  <p>Оптимизация для мобильных устройств</p>
                  <span></span>
                  <p>Интеграция e-commerce решений</p>
                  <span></span>
                  <p>Веб-аналитика и оптимизация</p>
                  <span></span>
                  <p>Поддержка и обслуживание</p>
                </div>
              </div>

              <div className={s.productsCard}>
                <div className={`${s.productsCardTitle} ${s.productsCardPurple}`}>
                  <h4>Блокчейн разработка</h4>
                </div>
                <div className={s.productsCardText}>
                  <p>Cмарт-контракты на EVM-совместимых блокчейнах</p>
                  <span></span>
                  <p>Токены и DeFi&CeFi криптокошельки</p>
                  <span></span>
                  <p>NFT-маркетплейсы, минтинг и генерация NFT</p>
                  <span></span>
                  <p>Лаунчпад, краудфандинговые платформы (IDO)</p>
                  <span></span>
                  <p>Блокчейн-решения для GameFI и Metaverse</p>
                  <span></span>
                  <p>
                    Криптовалютные биржи, обменники, платформы для токенизации
                  </p>
                </div>
              </div>

              <div className={s.productsCard}>
                <div className={s.productsCardTitle}>
                  <h4>мобильная разработка</h4>
                </div>
                <div className={s.productsCardText}>
                  <p>Индивидуальный дизайн и разработка</p>
                  <span></span>
                  <p>Платформенная адаптация</p>
                  <span></span>
                  <p>Разработка кросс-платформенных приложений</p>
                  <span></span>
                  <p>Мобильные игры</p>
                  <span></span>
                  <p>Интеграция аналитики и обратной связи</p>
                  <span></span>
                  <p>Техническая поддержка и обновления</p>
                </div>
              </div>

              <div className={s.productsCard}>
              <div className={`${s.productsCardTitle} ${s.productsCardPurple}`}>
                  <h4>Токен дизайн</h4>
                </div>
                <div className={s.productsCardText}>
                  <p>Агентно-ориентированное моделирование</p>
                  <span></span>
                  <p>Разработка визуальной карты дизайна токена</p>
                  <span></span>
                  <p>Аудит текущей токеномики проекта</p>
                  <span></span>
                  <p>Создание цифрового двойника</p>
                  <span></span>
                  <p>Стресс-тестирование системы</p>
                  <span></span>
                  <p>
                    Презентация с наглядными информационными панелями, графикой
                    и выводами
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
