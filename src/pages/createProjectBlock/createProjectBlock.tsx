import { useState } from "react";
import s from "./createProjectBlock.module.scss";
import { MainButton } from "../../shared/ui/Button/MainButton";

export const CreateProjectBlock = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [topic, setTopic] = useState("web");
  const [budget, setBudget] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ name, email, company, topic, budget });
  };

  return (
    <div className={s.createProjectBlock}>
      <div className="container">
        <div className={s.createProjectBlockContent}>
          <h2 className={s.headerText}>
            Мы готовы помочь вам <br /> реализовать ваш проект
          </h2>
          <div className={s.contactAndFormCreate}>
            <div className={s.contactBlock}>
              <h4 className={s.headerSubtitle}>Контакты</h4>
              <p className={s.subTitleInn}>
                <b>Адресс:</b> г. Алматы, Самал 3 (здание 15, офис 7)
              </p>
              <p className={s.subTitleInn}>
                <b>Email:</b> aa@techculture.tech
              </p>
              <p className={s.subTitleInn}>
                <b>График работы:</b> Пн - Пт, 9:00 - 18:00
              </p>
            </div>
            <div className={s.formCreateBlock}>
              <h4 className={s.headerSubtitle}>СВЯЖИТЕСЬ С НАМИ</h4>
              <p className={s.subTitleInn}>
                Заполните форму ниже, и мы ответим в кратчайшие сроки.
              </p>
              <form onSubmit={handleSubmit}>
                <div className={s.labelUp}>
                  <label htmlFor="name">Имя</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className={s.labelUp}>
                  <label htmlFor="email">Электронная почта</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className={s.labelUp}>
                  <label htmlFor="company">Компания</label>
                  <input
                    type="text"
                    id="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </div>
                <div className={s.labelUp}>
                  <label>Тема обсуждения</label>
                  <div>
                    <button type="button" onClick={() => setTopic("web")}>
                      Веб разработка
                    </button>
                    <button
                      type="button"
                      onClick={() => setTopic("blockchain")}
                    >
                      Блокчейн разработка
                    </button>
                    <button
                      type="button"
                      onClick={() => setTopic("consulting")}
                    >
                      Консалтинг
                    </button>
                    <button
                      type="button"
                      onClick={() => setTopic("it-support")}
                    >
                      IT поддержка
                    </button>
                    <button type="button" onClick={() => setTopic("mobile")}>
                      Мобильная разработка
                    </button>
                    <button type="button" onClick={() => setTopic("other")}>
                      Другое
                    </button>
                  </div>
                </div>
                <div className={s.labelUp}>
                  <label htmlFor="budget">Бюджет</label>
                  <input
                    type="text"
                    id="budget"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                  />
                </div>
                <MainButton>Отправить</MainButton>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
