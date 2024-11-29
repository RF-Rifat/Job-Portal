

import React from "react";

interface CheckboxProps {
  name: string;
  label: string;
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Checkbox: React.FC<CheckboxProps> = ({ name, label, checked, onChange }) => {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        id={name}
        name={name}
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 text-blue-600 border-gray-300 rounded"
      />
      <label htmlFor={name} className="text-sm text-gray-500">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
