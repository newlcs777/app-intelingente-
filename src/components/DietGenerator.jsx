import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { gerarDieta } from "./api";

function DietGenerator() {
  const location = useLocation();

  const {
    height,
    weight,
    age,
    gender,
    goal,
    meals,
    activityLevel,
    restrictions,
    trainingType,
    supplements,
    foods,
    tmbResult,
    percentualGordura,
  } = location.state || {};

  const [dietPlan, setDietPlan] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerateDiet = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const diet = await gerarDieta({
        weight,
        height,
        age,
        gender,
        goal,
        meals,
        activityLevel,
        restrictions,
        trainingType,
        supplements,
        foods,
        tmbResult,
        percentualGordura: percentualGordura || 0,
      });

      setDietPlan(diet);
    } catch (err) {
      console.error("Erro ao gerar a dieta:", err);
      setError("Ocorreu um erro ao gerar a dieta. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <button
        onClick={handleGenerateDiet}
        className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
        disabled={loading}
      >
        {loading ? "Gerando Dieta..." : "Gerar Dieta"}
      </button>

      {error && (
        <p className="text-red-600 font-medium mt-4">{error}</p>
      )}

      {dietPlan && (
        <div className="mt-6 p-4 bg-white border border-gray-300 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-2">Plano Alimentar</h3>
          <p className="text-gray-700 whitespace-pre-line">{dietPlan}</p>
        </div>
      )}
    </div>
  );
}

export default DietGenerator;
