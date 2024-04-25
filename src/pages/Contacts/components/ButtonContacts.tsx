import React from 'react';
import s from "../Contacts.module.scss";

const CheckBoxButton: React.FC<{ label: string; checked: boolean; onClick: () => void }> = ({ label, checked, onClick }) => {
  const handleChange = () => {
    onClick();
  };

  return (
    <button
      className={`${s.checkboxButtons} ${checked ? s.checked : ''}`}
      onClick={handleChange}
    >
      {label}
    </button>
  );
};

export default CheckBoxButton;
