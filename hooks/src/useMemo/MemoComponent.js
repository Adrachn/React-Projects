import React, {useState, useMemo, useEffect} from 'react';

export function MemoComponent(){
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    const doubleNumber = slowFunction(number);
    // Using the below useMemo instead will make changeTheme button
    // result quicker when the number is the same as before since we 
    // aren't running the slow function unless number has changed
    /*const doubleNumber = useMemo(() => {
        return slowFunction(number)
    }, [number])*/

    // due to referential equality we will get a new themeStyles object everytime
    // the function runs. A themeStyles object is not the same as a themeStylesObject
    // they reference different places in memory. To make sure we only
    // run useEffect when themeStyles actually gets updated, we can use useMemo
    // otherwise the "theme change" will be run even when changing number
    const themeStyles = /*useMemo(() =>*/{
        /*return{*/
            backgroundColor: dark ? "black" : "white",
            color: dark ? "white" : "black"
        //}
    }/*, [dark])*/
    useEffect(() => {
        console.log("theme changed");
    }, [themeStyles])

    return(
        <>
        <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))}/>
        <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
        <div style={themeStyles}>{doubleNumber}</div>
        </>
    )  
}

 function slowFunction(num){
    console.log("calling slow function");
    
    for (let i = 0; i <= 1000000000; i++) {}
        return num * 2;
}
