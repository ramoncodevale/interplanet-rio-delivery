import React from "react";

interface AddressInputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  maxLength?: number;
}

const AddressInput: React.FC<AddressInputProps> = ({
  label,
  value,
  onChange,
  type,
  maxLength,
}) => (
  <div className="mb-4">
    <label className="block text-lg font-medium text-gray-700 mb-2">
      {label}
    </label>
    <input
      type={type}
      maxLength={maxLength}
      className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2157ef] focus:border-transparent"
      value={value}
      onChange={onChange}
    />
  </div>
);

export default AddressInput;
