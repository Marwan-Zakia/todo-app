import React, { useState ,useEffect} from "react";

export const SettingContext = React.createContext();

export default function Settings(props) {
  const [toggeleComplte, settoggeleComplte] = useState(false);
  const [numberOfshow, setnumberOfshow] = useState(2);
 

  const state = {
    numberOfshow: numberOfshow,
    toggeleComplte: toggeleComplte,

  };

  useEffect(() => {
    let str = localStorage.getItem("settings");
    let obj = JSON.parse(str);
    if (obj) {
      settoggeleComplte(obj.numberOfshow);
      setnumberOfshow(Number(obj.numberOfItem));
    }
    // localStorage.clear();
  }, []);

  return (
    <SettingContext.Provider value={state}>
      {props.children}
    </SettingContext.Provider>
  );
}
