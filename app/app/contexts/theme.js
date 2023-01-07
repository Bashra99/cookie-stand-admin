'use client';
import { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext();

export default function ThemeWrapper({ children }) {

    const [isDarkTheme, setIsDarkTheme] = useState(window.localStorage.getItem('isDarkTheme'));

    function initialThemeHandle() {
        isDarkTheme && document.querySelector("body").classList.add("dark")
        window.localStorage.setItem('isDarkTheme', isDarkTheme)

    }

    function toggleThemeHandler() {
        setIsDarkTheme(!isDarkTheme);
        document.querySelector("body").classList.toggle("dark");
        window.localStorage.setItem("isDarkTheme", isDarkTheme)

    }

    const globalState = {
        isDarkTheme: true,
        toggleThemeHandler

    }

    useEffect(() => initialThemeHandle());

    return (
        <ThemeContext.Provider value={globalState}>
            {children}
        </ThemeContext.Provider>
    )
}