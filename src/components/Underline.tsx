import React from "react";

const Underline: React.FC = () => {
  return (
    <div className="absolute bottom-[-10px] left-1/2 h-[3px] w-[180px] -translate-x-1/2 transform rounded-full bg-slate-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
  );
};

export default Underline;
