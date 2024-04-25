import React from 'react';
import s from '../Contacts.module.scss';

interface InputProps {
  label: string;
  placeholder: string;
  id: string;
  value: string;
}

export const TextInput: React.FC<InputProps & { onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }> = ({ label, placeholder, id, value, onChange }) => {
  return (
    <div className={s.labelUp}>
      <label htmlFor={id}>{label}</label>
      <input placeholder={placeholder} type="text" value={value} onChange={onChange} id={id} />
    </div>
  );
};

export const EmailInput: React.FC<InputProps & { onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }> = ({ label, placeholder, id, onChange }) => {
  return (
    <div className={s.labelUp}>
      <label htmlFor={id}>{label}</label>
      <input placeholder={placeholder} type="email" onChange={onChange} id={id} />
    </div>
  );
};

