const InputWithLabel = ({ label, value, onChange, type, placeholder }) => {
  return (
    <div className="w-full sm:w-64 mb-4 mx-auto">
      <label className="block text-md font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full p-2.5 border-2 border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm font-sans placeholder-gray-400 transition-all duration-300 ease-in-out"
      />
    </div>
  );
};

export default InputWithLabel;
