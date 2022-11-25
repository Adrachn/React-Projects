// Reapeatble pattern. Any context you create you can create this
// template then use custom hooks to use the theme or theme update function
// and when you need to provide the theme you just need the one simple <ThemeProvider>
// all the complicated internal react way of handling context is handled in this ThemeContext
// class, makes rest of the code easy to maintain

import React, {useContext, useState} from 'react';

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

// Custom hooks to give access to the ThemeContexts ------
export function useTheme(){
    return useContext(ThemeContext);
}
export function useThemeUpdate(){
    return useContext(ThemeUpdateContext);
}
// -------------------------------------------------------

 export function ThemeProvider({children}){
    const [darkTheme, setDarkTheme] = useState(true);


    function toggleTheme(){
        setDarkTheme(prevDarkTheme => !prevDarkTheme);
    }

    return(
        <ThemeContext.Provider value={darkTheme}>
            <ThemeUpdateContext.Provider value={toggleTheme}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )

 }