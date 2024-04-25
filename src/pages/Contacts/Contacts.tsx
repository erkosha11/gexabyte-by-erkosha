import { useState } from "react";

import { Button } from "../../shared/ui/Button/Button";
import { TextInput, EmailInput } from "./components/InputContacts";
import CheckBoxButton from "./components/ButtonContacts";

import s from "./Contacts.module.scss";

export const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [topics, setTopics] = useState<string[]>([]);
  const [budget, setBudget] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log({ name, email, company, topics, budget });
  };

  const handleTopicToggle = (topic: string) => {
    if (topics.includes(topic)) {
      setTopics(topics.filter((t) => t !== topic));
    } else {
      setTopics([...topics, topic]);
    }
  };

  return (
    <section className="Contacts" id="Contacts">
      <div className={s.contacts}>
        <div className="container">
          <div className={s.contactsContent}>
            <div className={s.contactsTitle}>
              <h2>Мы готовы помочь вам реализовать ваш проект</h2>
            </div>
            <div className={s.contactsMore}>
              <div className={s.contactInfo}>
                <h4>Контакты</h4>
                <p>
                  <span>Адрес:</span> г. Алматы, Самал 3 (здание 15, офис 7)
                </p>
                <p>
                  <span>Email:</span> aa@techculture.tech
                </p>
                <p>
                  <span>График работы:</span> Пн - Пт, 9:00 - 18:00
                </p>
              </div>

              <div className={s.contactsForms}>
                <div className={s.contactFormsTitle}>
                  <h4>Свяжитесь с нами</h4>
                  <p>Заполните форму ниже, и мы ответим в кратчайшие сроки.</p>
                </div>

                <div className={s.contactForm}>
                  <form onSubmit={handleSubmit}>
                    <TextInput
                      label="Имя"
                      placeholder="Как к вам обращаться?"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <EmailInput
                      label="Электронная почта"
                      placeholder="Email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextInput
                      label="Компания"
                      placeholder="Название компании"
                      id="name"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                    />

                    <div className={s.contactButtonsTitle}>
                      <p>Тема обсуждения</p>
                    </div>
                    <div className={s.contactCheckboxButtons}>
                      <CheckBoxButton
                        checked={topics.includes("web")}
                        onClick={() => handleTopicToggle("web")}
                        label="Веб разработка"
                      />
                      <CheckBoxButton
                        checked={topics.includes("blockchain")}
                        onClick={() => handleTopicToggle("blockchain")}
                        label="Блокчейн разработка"
                      />
                      <CheckBoxButton
                        checked={topics.includes("consulting")}
                        onClick={() => handleTopicToggle("consulting")}
                        label="Консалтинг"
                      />
                      <CheckBoxButton
                        checked={topics.includes("it-support")}
                        onClick={() => handleTopicToggle("it-support")}
                        label="IT поддержка"
                      />
                      <CheckBoxButton
                        checked={topics.includes("mobile")}
                        onClick={() => handleTopicToggle("mobile")}
                        label="Мобильная разработка"
                      />
                      <CheckBoxButton
                        checked={topics.includes("other")}
                        onClick={() => handleTopicToggle("other")}
                        label="Другое"
                      />
                    </div>

                    <TextInput
                      label="Бюджет"
                      placeholder="Сумма"
                      id="name"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                    />

                    <div className={s.contactSubmit}>
                      <Button>Отправить</Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
