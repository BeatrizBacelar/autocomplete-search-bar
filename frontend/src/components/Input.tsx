import React from 'react';

type InputProps = {
  term: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input({ term, placeholder, onChange }: InputProps) {
  return (
    <input
      type="text"
      value={term}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

export default Input;