import { useCallback, useEffect, useRef } from 'react'

export default function useTimeout(callback, delay) {
    const callbackRef = useRef(callback); // enables the callback to stay the same even if re-render
    //otherwise timer would update everytime callback changes, like coponent state
    const timeoutRef = useRef();

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    const set = useCallback(() => {
        timeoutRef.current = setTimeout(() => callbackRef.current(), delay)
    }, [delay]);

    const clear = useCallback(() => {
        timeoutRef.current && clearTimeout(timeoutRef.current);
    }, []);

    useEffect(() => {
        set();
        return clear;
    }, [delay, set, clear]);

    const reset = useCallback(() => {
        clear();
        set();
    }, [clear, set]);

  return {reset, clear};
  
}
