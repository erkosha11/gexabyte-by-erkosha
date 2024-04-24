import React from "react";
import { Select } from "antd";
import s from "./Language.module.scss";

import LSLogoImg from "../../../../assets/icons/Language.svg";

interface LanguageSelectProps {
  defaultValue: string;
  handleChange: (value: string) => void;
}

const LanguageSelect: React.FC<LanguageSelectProps> = ({
  defaultValue,
  handleChange,
}) => {
  return (
    <Select
      defaultValue={defaultValue}
      style={{ width: 110 }}
      onChange={handleChange}
      options={[
        {
          label: <span>Language</span>,
          title: "manager",
          options: [
            {
              label: (
                <span className={s.option}>
                  <img src={LSLogoImg} alt="KAZ"></img>KZ
                </span>
              ),
              value: "KAZ",
            },
            {
              label: (
                <span className={s.option}>
                  <img src={LSLogoImg} alt="RUS"></img>RU
                </span>
              ),
              value: "RUS",
            },
            {
              label: (
                <span className={s.option}>
                  <img src={LSLogoImg} alt="ENG"></img>EN
                </span>
              ),
              value: "ENG",
            },
          ],
        },
      ]}
    />
  );
};

export default LanguageSelect;
