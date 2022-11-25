// useEffect runs the very first time your component mounts/renders
// and every time our dependencies change inside of your component
// This one doensn't run on the first render
import {useEffect, useRef} from 'react'


export default function useUpdateEffect() {
    const firstRenderRef = useRef(true); // is this the first render? default to true

    useEffect(() => {
        // if first render, set first render to false and don't execute code
        if(firstRenderRef.current){
            firstRenderRef.current = false;
            return 
        }
        return callback()
    }, dependencies) 
}
