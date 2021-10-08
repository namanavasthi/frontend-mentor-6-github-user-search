import React from "react";

export const Wrapper = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-3xl p-5 md:w-10/12 md:px-0 md:py-10">
      {children}
    </div>
  );
};
