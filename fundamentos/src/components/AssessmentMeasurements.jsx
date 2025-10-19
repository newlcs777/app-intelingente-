import React from "react";

export const AssessmentMeasurements = () => {
  return (
    <div className="min-h-screen bg-white py-10">
      <div className="max-w-3xl mx-auto p-6 space-y-10 font-sans text-gray-800">

        {/* Título */}
        <header className="text-center space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Medidas Corporais
          </h1>
          <p className="text-lg sm:text-xl text-gray-700">
            Registre suas medidas em centímetros para acompanhar sua evolução
          </p>
        </header>

        {/* Seção de medidas */}
        <div className="space-y-6">

          {/* Bíceps */}
          <div className="bg-white p-5 rounded-2xl shadow-md flex flex-col space-y-4 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-gray-900">Bíceps Contraído</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-gray-700 font-medium">Direito</label>
                <input
                  type="number"
                  className="mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-gray-700 font-medium">ssssEsquerdo</label>
                <input
                  type="number"
                  className="mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Tórax */}
          <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
            <label className="text-gray-700 font-medium">Tórax Relaxado</label>
            <input
              type="number"
              className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />
          </div>

          {/* Cintura */}
          <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
            <label className="text-gray-700 font-medium">Cintura</label>
            <input
              type="number"
              className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />
          </div>

          {/* Abdômen */}
          <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
            <label className="text-gray-700 font-medium">Abdômen</label>
            <input
              type="number"
              className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />
          </div>

          {/* Quadril */}
          <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
            <label className="text-gray-700 font-medium">Quadril</label>
            <input
              type="number"
              className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
            />
          </div>

          {/* Coxa */}
          <div className="bg-white p-5 rounded-2xl shadow-md flex flex-col space-y-4 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-gray-900">Coxa</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-gray-700 font-medium">Direito</label>
                <input
                  type="number"
                  className="mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-gray-700 font-medium">Esquerdo</label>
                <input
                  type="number"
                  className="mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Panturrilha */}
          <div className="bg-white p-5 rounded-2xl shadow-md flex flex-col space-y-4 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-gray-900">Panturrilha</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-gray-700 font-medium">Direito</label>
                <input
                  type="number"
                  className="mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-gray-700 font-medium">Esquerdo</label>
                <input
                  type="number"
                  className="mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AssessmentMeasurements;
