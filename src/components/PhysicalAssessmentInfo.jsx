import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import ExpandableText from "./ExpandableText"; // seu componente já pronto

const PhysicalAssessmentInfo = () => {
  const benefits = [
    {
      title: "Conhecer seu ponto de partida",
      description:
        "A avaliação mostra como está seu corpo, incluindo peso, percentual de gordura, massa muscular e condicionamento físico. Sem essas informações, fica difícil traçar objetivos claros e acompanhar o progresso.",
    },
    {
      title: "Definir metas realistas",
      description:
        "Com os resultados, é possível estabelecer metas atingíveis, como perder gordura, ganhar massa muscular ou melhorar resistência. Acompanhar os resultados aumenta a motivação e evita frustrações.",
    },
    {
      title: "Planejar treinos personalizados",
      description:
        "A avaliação ajuda a criar treinos específicos para o seu corpo e objetivo, tornando os exercícios mais eficientes. Evita perder tempo com treinos genéricos e acelera os resultados.",
    },
    {
      title: "Prevenir lesões",
      description:
        "Identifica desequilíbrios musculares, postura incorreta e limitações físicas. Permite ajustar os treinos e proteger músculos e articulações.",
    },
    {
      title: "Acompanhar a evolução",
      description:
        "Avaliações periódicas mostram se os treinos e a alimentação estão funcionando. Possibilita ajustes estratégicos e mantém a motivação ao ver os resultados reais.",
    },
    {
      title: "Melhorar a saúde geral",
      description:
        "Algumas avaliações incluem pressão arterial, frequência cardíaca e outros indicadores de saúde. Ajuda a adotar hábitos mais saudáveis e prevenir problemas futuros.",
    },
  ];

  return (
    <div className="bg-white py-10">
      <div className="max-w-3xl mx-auto p-6 space-y-10 font-sans text-gray-800">
        {/* Título */}
        <header className="text-center space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Avaliação Física
          </h1>
          <p className="text-lg sm:text-xl text-gray-700">
            Entenda seu corpo e planeje treinos eficientes para seus objetivos
          </p>
        </header>

        {/* Lista de benefícios com botão Ler mais/Menos à direita */}
        <ExpandableText collapsedHeight={300}>
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-2xl shadow-md flex space-x-4 items-start hover:shadow-xl transition-shadow duration-300"
              >
                <FaCheckCircle className="text-yellow-500 text-2xl mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700 mt-1">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </ExpandableText>

        {/* Conclusão */}
        <p className="text-gray-800 text-center font-medium mt-6">
          A avaliação física é <strong>um guia para o seu corpo</strong>, mostrando onde você está,
          para onde pode ir e como chegar lá de forma segura e eficiente. Sem ela, qualquer treino
          ou dieta é como <strong>andar no escuro sem mapa</strong>.
        </p>
      </div>
    </div>
  );
};

export default PhysicalAssessmentInfo;
