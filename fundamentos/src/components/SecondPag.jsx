import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import InputWithLabel from "./InputWithLabel";

function SecondPag() {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    height,
    weight,
    age,
    gender,
    tmbResult,
    protein,
    carb,
    fat,
    resultado,
    percentualGordura,
  } = location.state || {};

  const [goal, setGoal] = useState("");
  const [meals, setMeals] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [restrictions, setRestrictions] = useState("");
  const [trainingType, setTrainingType] = useState("");
  const [supplements, setSupplements] = useState("");
  const [foods, setFoods] = useState("");

  const handleSubmit = () => {
    navigate("/resultpage", {
      state: {
        height,
        weight,
        age,
        gender,
        tmbResult,
        protein,
        carb,
        fat,
        resultado,
        percentualGordura,
        goal,
        meals,
        activityLevel,
        restrictions,
        trainingType,
        supplements,
        foods,
      },
    });
  };

  return (
    <div className="w-full mb-6 flex flex-col items-center mt-10 max-w-4xl mx-auto p-6 bg-yellow-400 shadow-xl rounded-2xl">
      <h2 className="text-4xl font-semibold mb-8 text-gray-800 tracking-wide">Detalhes da Dieta</h2>

      <InputWithLabel
        label="Objetivo da Dieta"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        className="w-full p-4 border-2 border-transparent bg-gray-50 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg font-sans placeholder-gray-400 transition-all duration-300 ease-in-out mb-6"
        placeholder="Digite seu objetivo da dieta..."
      />

      <InputWithLabel
        label="Refeições por dia"
        value={meals}
        onChange={(e) => setMeals(e.target.value)}
        type="number"
        className="w-full p-4 border-2 border-transparent bg-gray-50 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg font-sans placeholder-gray-400 transition-all duration-300 ease-in-out mb-6"
        placeholder="Quantidade de refeições"
      />

      <InputWithLabel
        label="Nível de atividade física"
        value={activityLevel}
        onChange={(e) => setActivityLevel(e.target.value)}
        className="w-full p-4 border-2 border-transparent bg-gray-50 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg font-sans placeholder-gray-400 transition-all duration-300 ease-in-out mb-6"
        placeholder="Descreva seu nível de atividade"
      />

      <InputWithLabel
        label="Restrições alimentares"
        value={restrictions}
        onChange={(e) => setRestrictions(e.target.value)}
        className="w-full p-4 border-2 border-transparent bg-gray-50 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg font-sans placeholder-gray-400 transition-all duration-300 ease-in-out mb-6"
        placeholder="Informe as restrições alimentares"
      />

      <InputWithLabel
        label="Tipo de treino"
        value={trainingType}
        onChange={(e) => setTrainingType(e.target.value)}
        className="w-full p-4 border-2 border-transparent bg-gray-50 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg font-sans placeholder-gray-400 transition-all duration-300 ease-in-out mb-6"
        placeholder="Especifique o tipo de treino"
      />

      <InputWithLabel
        label="Suplementos"
        value={supplements}
        onChange={(e) => setSupplements(e.target.value)}
        className="w-full p-4 border-2 border-transparent bg-gray-50 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg font-sans placeholder-gray-400 transition-all duration-300 ease-in-out mb-6"
        placeholder="Liste os suplementos"
      />

      <InputWithLabel
        label="Alimentos consumidos"
        value={foods}
        onChange={(e) => setFoods(e.target.value)}
        className="w-full p-4 border-2 border-transparent bg-gray-50 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg font-sans placeholder-gray-400 transition-all duration-300 ease-in-out mb-6"
        placeholder="Escreva os alimentos consumidos"
      />

      <button
        onClick={handleSubmit}
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Ver Resultado Final
      </button>
    </div>
  );
}

export default SecondPag;
