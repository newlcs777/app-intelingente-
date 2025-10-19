import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import ExpandableText from "../components/ExpandableText";

const TmbInfo = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-10 font-sans text-gray-800">
      {/* Título principal e subtítulo */}
      <header className="text-center space-y-2">
        <p className="text-lg sm:text-xl text-gray-700">
          Descubra quantas calorias seu corpo precisa diariamente
        </p>
      </header>

      {/* --- Envolve as seções dentro do ExpandableText --- */}
      <ExpandableText maxHeight={350}>
        {/* Por que conhecer sua TMB */}
        <section className="w-full bg-white p-6 rounded-2xl shadow-lg space-y-4 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-gray-900">Por que conhecer sua TMB?</h2>
          <p>
            A TMB mostra quantas calorias seu corpo precisa apenas para funções essenciais,
            como respirar, bombear sangue e manter a temperatura corporal.
          </p>
          <p className="font-medium">
            Saber sua TMB ajuda a planejar sua alimentação e exercícios para:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center space-x-2">
              <FaCheckCircle className="text-yellow-500" />
              <span>Manter o peso</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaCheckCircle className="text-yellow-500" />
              <span>Ganhar massa muscular</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaCheckCircle className="text-yellow-500" />
              <span>Perder gordura corporal</span>
            </li>
          </ul>
        </section>

        {/* Como usar a TMB para emagrecer */}
        <section className="w-full bg-white p-6 rounded-2xl shadow-lg space-y-4 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-gray-900">Como usar a TMB para emagrecer</h2>
          <p>
            Para emagrecer, é preciso consumir <strong>menos calorias do que seu corpo gasta</strong>.
            Um nutricionista pode criar um plano com <strong>déficit calórico</strong>,
            fazendo o corpo usar a gordura armazenada como energia.
          </p>
          <p>
            Com dieta adequada, exercícios e acompanhamento da TMB, você consegue atingir
            seus objetivos de forma <strong>eficiente e saudável</strong>.
          </p>
        </section>

        {/* Como é calculada a TMB */}
        <section className="w-full bg-white p-6 rounded-2xl shadow-lg space-y-4 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-gray-900">Como é calculada a TMB</h2>
          <p>Existem diferentes métodos de cálculo:</p>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>
              <strong>Fórmulas da OMS:</strong> baseadas em idade, sexo e peso.
              <ul className="list-disc list-inside ml-6 text-gray-600 space-y-1">
                <li>Mulher (18-30 anos): (14,818 × peso em kg) + 486,6</li>
                <li>Homem (18-30 anos): (15,057 × peso em kg) + 692,2</li>
              </ul>
            </li>
            <li>
              <strong>Calorimetria:</strong> direta ou indireta, mede o gasto energético real.
            </li>
            <li>
              <strong>Equações preditivas:</strong> consideram peso, idade, sexo e nível de atividade física.
            </li>
          </ol>
          <p>
            Assim como o IMC, a TMB é individual. Use os valores como guia para
            <strong> criar um plano personalizado</strong>.
          </p>
        </section>

        {/* Como usar a calculadora */}
        <section className="w-full bg-white p-6 rounded-2xl shadow-lg space-y-4 hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-semibold text-gray-900">Como usar a calculadora de TMB</h2>
          <p>
            Insira seus dados (peso, idade e gênero) e clique em <strong>Calcular</strong>.
            O resultado aparece imediatamente, mostrando
            <strong> quantas calorias seu corpo precisa por dia</strong>.
          </p>
        </section>
      </ExpandableText>
    </div>
  );
};

export default TmbInfo;
