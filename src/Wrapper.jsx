import React from "react";

export const Wrapper = ({ children }) => {
  return <div className="flex flex-col items-center justify-center w-full max-w-screen-xl p-5">{children}</div>;
};
