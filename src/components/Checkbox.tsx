import React from "react";

export const Checkbox = ({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className="relative">
      <input
        type="checkbox"
        className={`peer absolute inset-0 w-full h-full opacity-0 cursor-pointer ${className}`}
        {...props}
      />
      <div className="w-12 h-6 bg-gray-500 rounded-full peer-checked:bg-indigo-500 transition-colors duration-300"></div>
      <div className="w-4 h-4 bg-white rounded-full absolute top-1 left-1 peer-checked:translate-x-6 pointer-events-none transition-transform duration-300" />
    </div>
  );
};
