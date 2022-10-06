import React from "react";

const Button = ({ styles, text }) => {
  return (
    <button
      type="button"
      className={`bg-blue-gradient rounded-[10px] bg-indigo-500 py-4 px-6 font-poppins text-[18px] font-medium text-primary shadow-lg outline-none hover:shadow-cyan-500/50 ${styles}`}
    >
      {text}
    </button>
  );
};

export default Button;
