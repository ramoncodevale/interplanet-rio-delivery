import React from "react";

interface PlanetSelectProps {
  value: "Terra" | "Marte";
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const PlanetSelect: React.FC<PlanetSelectProps> = ({ value, onChange }) => (
  <div className="mb-4">
    <label className="block text-lg font-medium text-gray-700 mb-2">
      Planeta:
    </label>
    <select
      className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2157ef] focus:border-transparent"
      value={value}
      onChange={onChange}
    >
      <option value="Terra">Terra</option>
      <option value="Marte">Marte</option>
    </select>
  </div>
);

export default PlanetSelect;
