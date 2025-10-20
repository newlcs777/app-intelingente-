import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { gerarDieta } from "./api";
import Disclaimer from "./Disclaimer";

function ResultPage() {
  const location = useLocation();

  const initialState = location.state || {
    height: 0,
    weight: 0,
    age: 0,
    gender: "",
    tmbResult: 0,
    percentualGordura: 0,
    goal: "",
    meals: "",
    activityLevel: "",
    restrictions: "",
    trainingType: "",
    supplements: "",
    foods: "",
  };

  const [editableFields, setEditableFields] = useState({
    gender: initialState.gender || "",
    goal: initialState.goal || "",
    meals: initialState.meals || "",
    activityLevel: initialState.activityLevel || "",
    restrictions: initialState.restrictions || "",
    trainingType: initialState.trainingType || "",
    supplements: initialState.supplements || "",
    foods: initialState.foods || "",
    percentualGordura: initialState.percentualGordura || 0,
  });

  const [dietPlan, setDietPlan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditableFields((prev) => ({
      ...prev,
      [name]: value === "" ? "" : isNaN(value) ? value : Number(value),
    }));
  };

  const handleGenerateDiet = async () => {
    if (loading) return;
    setLoading(true);
    setError("");
    setDietPlan(null);

    try {
      const diet = await gerarDieta({ ...initialState, ...editableFields });
      setDietPlan(diet);
    } catch (err) {
      console.error(err);
      if (err?.response?.status === 429) {
        setError("Muitas requisições! Aguarde alguns segundos antes de tentar novamente.");
      } else {
        setError("Ocorreu um erro ao gerar a dieta. Tente novamente.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen py-8">
      <Disclaimer />

      <div className="max-w-3xl mx-auto p-6 space-y-8 font-sans text-gray-700">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-yellow-500 mb-6">
          Resultado Final
        </h2>

        {/* Informações básicas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { label: "Altura", value: `${initialState.height} cm` },
            { label: "Peso", value: `${initialState.weight} kg` },
            { label: "Idade", value: `${initialState.age} anos` },
            { label: "TMB", value: `${Number(initialState.tmbResult).toFixed(0)} kcal` },
{ label: "Gordura Corporal", value: `${Number(initialState.percentualGordura).toFixed(2)}%` },
          ].map((item, index) => (
            <div
              key={index}
              className="w-full p-4 bg-white rounded-2xl shadow-md flex flex-col items-center justify-center"
            >
              <p className="text-gray-600 text-sm">{item.label}</p>
              <p className="text-gray-800 font-semibold text-lg mt-1">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Campos editáveis */}
        <div className="space-y-4">
          {[
            { label: "Sexo", name: "gender" },
            { label: "Objetivo", name: "goal" },
            { label: "Refeições", name: "meals" },
            { label: "Atividade", name: "activityLevel" },
            { label: "Restrições", name: "restrictions" },
            { label: "Treino", name: "trainingType" },
            { label: "Suplementos", name: "supplements" },
            { label: "Alimentos", name: "foods" },
          ].map((item, index) => (
            <div
              key={index}
              className="w-full p-4 bg-white rounded-2xl shadow-md"
            >
              <label
                htmlFor={item.name}
                className="block mb-2 font-semibold text-gray-700"
              >
                {item.label}:
              </label>
              <input
                type="text"
                id={item.name}
                name={item.name}
                value={editableFields[item.name]}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-400 text-gray-800 bg-white"
              />
            </div>
          ))}
        </div>

        {/* Botão gerar dieta */}
        <button
          onClick={handleGenerateDiet}
          disabled={loading}
          className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 rounded-2xl mt-4 transition-all duration-300 disabled:bg-gray-400"
        >
          {loading ? "Gerando Dieta..." : "Gerar Dieta"}
        </button>

        {error && <p className="text-red-600 font-medium mt-4">{error}</p>}

        {/* Plano alimentar */}
        {dietPlan && (
          <div className="mt-6 p-6 bg-white rounded-2xl shadow-md space-y-4">
            <h3 className="text-xl font-semibold text-yellow-500 mb-3">
              Plano Alimentar
            </h3>
            {typeof dietPlan === "string" ? (
              <p className="text-gray-700 whitespace-pre-line">{dietPlan}</p>
            ) : (
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {dietPlan.meals?.map((meal, index) => (
                  <li key={index}>{meal}</li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default ResultPage;
