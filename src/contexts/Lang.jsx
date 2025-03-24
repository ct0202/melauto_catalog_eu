import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("en");

    const toggleLanguage = () => {
        setLanguage(prevLang => (prevLang === "en" ? "pl" : "en"));
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

// Хук для использования контекста
export const useLanguage = () => useContext(LanguageContext);
