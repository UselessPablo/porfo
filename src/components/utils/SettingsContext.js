import React, { createContext, useContext, useState } from 'react';

const SettingsContext = createContext();

export const useSettings = () => {
    return useContext(SettingsContext);
};

export const SettingsProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [isLightBackground, setIsLightBackground] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const toggleBackground = () => {
        toggleDarkMode();
        setIsLightBackground(!isLightBackground);
        
    };

    return (
        <SettingsContext.Provider value={{ isDarkMode, isLightBackground, toggleDarkMode, toggleBackground }}>
            {children}
        </SettingsContext.Provider>
    );
};
