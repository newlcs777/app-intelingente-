import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import InputWithLabel from "./InputWithLabel";
import CustomLabel from "./CustomLabel";
import TmbInfo from "./TmbInfo";

function TmbCalculation() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [tmbResult, setTmbResult] = useState(null);
  const [protein, setProtein] = useState(0);
  const [carb, setCarb] = useState(0);
  const [fat, setFat] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/foldsassessment", {
      state: { height, weight, age, tmbResult, protein, carb, fat },
    });
  };

  const calculateTmb = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);
    const a = parseFloat(age);

    if (!h || !w || !a) {
      alert("Preencha todos os campos corretamente.");
      return;
    }

    const tmb = 88.362 + 13.397 * w + 4.799 * h - 5.677 * a; // Harris-Benedict
    setProtein(w * 3);
    setCarb(w * 3);
    setFat(w * 0.8);

    let start = 0;
    const duration = 800;
    const increment = tmb / (duration / 16);
    const animate = () => {
      start += increment;
      if (start < tmb) {
        setTmbResult(start);
        requestAnimationFrame(animate);
      } else {
        setTmbResult(tmb);
      }
    };
    animate();
  };

  return (
    <div className="min-h-screen bg-white py-10">
      <div className="max-w-3xl mx-auto p-6 space-y-10 font-sans text-gray-800">

        {/* Título principal e subtítulo */}
        <header className="text-center space-y-2">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Cálculo da Taxa Metabólica Basal (TMB)
          </h2>
          <p className="text-lg sm:text-xl text-gray-700">
            Insira seus dados e descubra suas necessidades calóricas diárias
          </p>
        </header>

        {/* Informações sobre TMB */}
        <TmbInfo />

        {/* Calculadora de TMB */}
        <section className="w-full bg-white p-6 rounded-2xl shadow-lg space-y-6 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-gray-900 text-center">
            Calculadora de TMB
          </h2>

          <p className="text-center text-gray-700">
            Insira suas informações abaixo para descobrir sua TMB e necessidades diárias.
          </p>

          <div className="space-y-4">
            <InputWithLabel
              label="Altura (cm)"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              type="number"
            />
            <InputWithLabel
              label="Peso (kg)"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              type="number"
            />
            <InputWithLabel
              label="Idade (anos)"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              type="number"
            />
          </div>

          <button
            onClick={calculateTmb}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-4 rounded-xl transform hover:scale-105 transition-all duration-200 shadow-md"
          >
            Calcular
          </button>

          {tmbResult !== null && (
            <div className="bg-white p-6 rounded-2xl shadow-xl space-y-6 mt-6 border-l-4 border-yellow-500 animate-fadeIn">
              <p className="font-bold text-gray-900 text-center text-2xl">
                Sua TMB é: {tmbResult.toFixed(2)} calorias
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200 shadow-sm flex items-center space-x-3 hover:shadow-md transition-shadow duration-200">
                  <FaCheckCircle className="text-yellow-500 text-xl" />
                  <CustomLabel title="Proteína necessária" text={`${protein}g`} />
                </div>
                <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200 shadow-sm flex items-center space-x-3 hover:shadow-md transition-shadow duration-200">
                  <FaCheckCircle className="text-yellow-500 text-xl" />
                  <CustomLabel title="Carboidratos necessários" text={`${carb}g`} />
                </div>
                <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200 shadow-sm flex items-center space-x-3 hover:shadow-md transition-shadow duration-200">
                  <FaCheckCircle className="text-yellow-500 text-xl" />
                  <CustomLabel title="Gordura necessária" text={`${fat}g`} />
                </div>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-4 rounded-xl transform hover:scale-105 transition-all duration-200 shadow-md"
              >
                Prosseguir
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default TmbCalculation;
