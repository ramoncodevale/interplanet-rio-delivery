import React from "react";

interface SubmitButtonProps {
  onClick: () => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="w-full bg-gradient-to-r cursor-pointer from-[#3776fa] to-[#2157ef] text-white p-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
  >
    Salvar Endereço
  </button>
);

export default SubmitButton;
