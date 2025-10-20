import React from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

const Disclaimer = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 space-y-4">
      <div className="flex items-center space-x-3">
        <HiOutlineExclamationCircle className="w-6 h-6 text-yellow-500" />
        <h3 className="text-xl sm:text-2xl font-bold text-yellow-500">
          Atenção!
        </h3>
      </div>

      <p className="text-gray-800 text-base sm:text-lg">
        Para gerar um plano alimentar personalizado, preencha corretamente os campos abaixo:
      </p>

      <ul className="list-disc list-inside text-gray-700 space-y-2 pl-5">
        <li>Tipos de alimentos que você costuma consumir</li>
        <li>Frequência e tipos de treino na academia</li>
        <li>Seu objetivo (perda de gordura, ganho de massa, manutenção)</li>
        <li>Suplementos que utiliza (se houver)</li>
      </ul>

      <p className="text-gray-800 text-base sm:text-lg font-medium">
        Quanto mais precisas forem as informações, melhor será o resultado do seu plano alimentar.
      </p>
    </div>
  );
};

export default Disclaimer;
