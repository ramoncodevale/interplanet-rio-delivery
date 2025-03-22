"use client"; // Adiciona "use client" para garantir a execução no lado do cliente

import { useState, useEffect } from "react";
import Image from "next/image";
import SubmitButton from "./submit-button";
import AddressInput from "./addres-input";
import PlanetSelect from "./planet-select";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddressForm() {
  const [planet, setPlanet] = useState<"Terra" | "Marte">("Terra");
  const [addressName, setAddressName] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [lot, setLot] = useState<string>("");
  const [storedAddresses, setStoredAddresses] = useState<any[]>([]);

  useEffect(() => {
    const addresses = JSON.parse(localStorage.getItem("addresses") || "[]");
    setStoredAddresses(addresses);
  }, []);

  function saveAddress(): void {
    if (
      !addressName ||
      (planet === "Terra" && (!country || !city)) ||
      (planet === "Marte" && !lot)
    ) {
      toast.error("Por favor, preencha todos os campos obrigatórios!");
      return;
    }

    const newAddress = {
      name: addressName,
      planet,
      location: planet === "Terra" ? { country, city } : { lot },
    };

    setStoredAddresses((prevAddresses) => {
      const updatedAddresses = [...prevAddresses, newAddress];
      localStorage.setItem("addresses", JSON.stringify(updatedAddresses));
      return updatedAddresses;
    });

    setAddressName("");
    setCity("");
    setCountry("");
    setLot("");

    toast.success("Endereço salvo com sucesso!");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-5">
      <h1 className="font-bold text-4xl text-white text-center mb-8 drop-shadow-lg">
        Delivery Interplanetário
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-4xl bg-white shadow-2xl rounded-2xl p-8 border border-gray-200">
        <div className="w-full md:w-1/2 flex flex-col">
          <h2 className="text-3xl font-semibold mb-6 text-[#2157ef]">
            Cadastro de Endereço
          </h2>

          <AddressInput
            label="Nome do Endereço:"
            value={addressName}
            onChange={(e) => setAddressName(e.target.value)}
            type="text"
          />

          <PlanetSelect
            value={planet}
            onChange={(e) => setPlanet(e.target.value as "Terra" | "Marte")}
          />

          {planet === "Terra" ? (
            <>
              <AddressInput
                label="País:"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                type="text"
              />
              <AddressInput
                label="Cidade:"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                type="text"
              />
            </>
          ) : (
            <AddressInput
              label="Lote (4 dígitos):"
              value={lot}
              onChange={(e) => setLot(e.target.value.replace(/\D/g, ""))}
              type="text"
              maxLength={4}
            />
          )}

          <SubmitButton onClick={saveAddress} />
        </div>

        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="rounded-xl overflow-hidden shadow-md border hidden md:flex border-gray-200">
            <Image
              src={
                planet === "Terra" ? "/planeta-terra.jpg" : "/planeta-marte.jpg"
              }
              alt={planet === "Terra" ? "Planeta Terra" : "Planeta Marte"}
              width={500}
              height={500}
              className="rounded-xl w-full h-full object-cover hover:scale-105 transition-all duration-300"
            />
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} />{" "}
    </div>
  );
}
