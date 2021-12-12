import React from "react";

export const SettingContext =React. createContext();

export default function Settings(props) {
  const state = {
    shown: false,
    number: 5,
  };

  return (
    <SettingContext.Provider value={state}>
      {props.children}
    </SettingContext.Provider>
  );
}
