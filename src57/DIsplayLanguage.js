import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
const Strings = {
  EN: { LANG: "The language is set to English" },
  IT: { LANG: "La lingua è impostata su Italiano" },
  ES: { LANG: "el idioma esta puesto en espanol" },
};

const DisplayLanguage = () => {
  const language = useContext(LanguageContext);
  return (
    <div>
      <h1>{Strings[language].LANG}</h1>
    </div>
  );
};

export default DisplayLanguage;
