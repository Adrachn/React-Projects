import React, {useState, useEffect, useRef} from 'react';
// useRef is like states and stores things between renders. It just doesn't cause re-renders.
// Also used to reference html elements and store prev value of state


export default function RefComponent(){
    const [name, setName] = useState("");
    const renderCount = useRef(1); // useState(1)
    const inputRef = useRef();
    const prevName = useRef();

    // Hade renderCount varit en vanlig state hade vi hamnat i en endless loop där
    // useEffect uppdaterade vid render och useState med, vilket triggrar useEffect
    useEffect(() => {
        renderCount.current = renderCount.current + 1;
    })
    //Save previous value of state
    useEffect(() => {
        prevName.current = name;
    }, [name])

    // Focus the input element when clicking the button
    function focus(){
        inputRef.current.focus();
    }


    return(
        <>
            <input ref={inputRef} value={name} onChange={e => setName(e.target.value)}/>
            <div>My name is {name} and it used to be {prevName.current}</div>
            <div>I rendered {renderCount.current} times</div>
            <h1></h1>
            <button onClick={focus}>Focus</button>
        </>
    
    )
}