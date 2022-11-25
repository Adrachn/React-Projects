import {useState} from "react";
import useEffectOnce from "./useEffectOnce";

// No matter how many times we refresh, it only alerts once

export default function EffectOnceComponent(){
    const [count, setCount] = useState(0);

    useEffectOnce(() => alert("Hi"));

    return(
        <>
            <div>{count}</div>
            <button onClick={() => setCount(c => c + 1)}>Increment</button>
        </>
    )
}