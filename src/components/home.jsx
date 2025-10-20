
import React from 'react';
import heroImg from '../assets/hero-image.jpg'; // Substitua com sua imagem real

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-100 to-white flex flex-col-reverse md:flex-row items-center justify-between px-8 md:px-20 py-10">
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-6xl font-bold text-teal-700 mb-6">
          Transforme sua saúde
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Descubra sua Taxa Metabólica Basal e atinja seus objetivos com inteligência nutricional.
        </p>
        <button className="bg-teal-600 hover:bg-teal-800 text-white px-6 py-3 rounded-xl text-lg transition">
          Começar Agora
        </button>
      </div>
      <div className="mb-10 md:mb-0">
        <img
          src={heroImg}
          alt="Imagem de saúde"
          className="w-[300px] md:w-[500px] rounded-2xl shadow-xl"
        />
      </div>
    </div>
  );
};

export default HomePage;
