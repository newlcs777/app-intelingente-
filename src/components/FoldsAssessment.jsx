import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PhysicalAssessmentInfo from "./PhysicalAssessmentInfo";

const FoldsAssessment = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    height,
    weight,
    age: initialAge,
    tmbResult,
    protein,
    carb,
    fat,
    gender,
    goal,
    meals,
    activityLevel,
    restrictions,
    trainingType,
    supplements,
    foods,
  } = location.state || {};

  const [age, setAge] = useState(initialAge || 0);
  const [subescapular, setSubescapular] = useState(0);
  const [triciptal, setTriciptal] = useState(0);
  const [axiliar, setAxiliar] = useState(0);
  const [supra, setSupra] = useState(0);
  const [peitoral, setPeitoral] = useState(0);
  const [abdominal, setAbdominal] = useState(0);
  const [coxa, setCoxa] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [percentualGordura, setPercentualGordura] = useState(0);

  useEffect(() => {
    const soma = subescapular + triciptal + axiliar + supra + peitoral + abdominal + coxa;
    setResultado(soma);

    if (age > 0 && soma > 0) {
      const densidadeCorporal =
        1.112 - 0.00043499 * soma + 0.00000055 * Math.pow(soma, 2) - 0.00028826 * age;
      const percentual = ((4.95 / densidadeCorporal) - 4.50) * 100;
      setPercentualGordura(percentual);
    } else {
      setPercentualGordura(0);
    }
  }, [subescapular, triciptal, axiliar, supra, peitoral, abdominal, coxa, age]);

  const handleSubmit = () => {
    navigate("/resultpage", {
      state: {
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
        protein,
        carb,
        fat,
        resultado,
        percentualGordura,
      },
    });
  };

  const measurements = [
    { label: "Subescapular", value: subescapular, setValue: setSubescapular },
    { label: "Triciptal", value: triciptal, setValue: setTriciptal },
    { label: "Axiliar", value: axiliar, setValue: setAxiliar },
    { label: "Supra-ilíaca", value: supra, setValue: setSupra },
    { label: "Peitoral", value: peitoral, setValue: setPeitoral },
    { label: "Abdominal", value: abdominal, setValue: setAbdominal },
    { label: "Coxa", value: coxa, setValue: setCoxa },
  ];

  return (
    <div className="min-h-screen bg-white py-10">
      <div className="max-w-3xl mx-auto p-6 space-y-10 font-sans text-gray-800">

        {/* Informação sobre avaliação física */}
        <PhysicalAssessmentInfo />

        {/* Formulário de avaliação de dobras cutâneas */}
        <section className="bg-white p-6 rounded-2xl shadow-lg space-y-6 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl sm:text-3xl font-bold text-yellow-500 text-center">
           Avaliação Física – Protocolo de 7 Dobras de Jackson & Pollock
          </h2>

          {/* Idade */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Idade:</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(parseFloat(e.target.value))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-400"
              placeholder="Digite sua idade"
            />
          </div>

          {/* Medidas */}
          {measurements.map(({ label, value, setValue }, index) => (
            <div key={index}>
              <label className="block text-gray-700 font-semibold mb-1">{label}:</label>
              <input
                type="number"
                value={value}
                onChange={(e) => setValue(parseFloat(e.target.value))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-400"
                placeholder={`Digite a medida (${label})`}
              />
            </div>
          ))}

          {/* Resultados */}
          <div className="bg-yellow-50 p-5 rounded-2xl shadow-inner text-center space-y-2">
            <h3 className="text-lg font-semibold text-gray-900">Resultados:</h3>
            <p>
              Soma das dobras: <span className="font-bold">{resultado} mm</span>
            </p>
            <p>
              Percentual de Gordura: <span className="font-bold">{percentualGordura.toFixed(2)}%</span>
            </p>
          </div>

          {/* Botão */}
          <button
            onClick={handleSubmit}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-4 rounded-2xl transform hover:scale-105 transition-all duration-200 shadow-md"
          >
            Enviar para Resultado
          </button>
        </section>
      </div>
    </div>
  );
};

export default FoldsAssessment;
