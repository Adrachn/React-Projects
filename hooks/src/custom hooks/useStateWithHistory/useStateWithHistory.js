import { type } from '@testing-library/user-event/dist/type';
import {useCallback, useRef, useState} from 'react';
// To be able to go back and forward and to specific point in history of the state
// Like undo and redo

//takes in default value and optional capacity which defualts to 10 (can store at most 10 things inside of our state)
export default function useStateWithHistory(defaultValue, {capacity = 10} = {}) {
    const [value, setValue] = useState(defaultValue);
    // Reference ot our history array adn pointer to track where in history we currently are
    const historyRef = useRef([value]);
    const pointerRef = useRef(0);

    const set = useCallback(v => {
        const resolvedValue = typeof v === "function" ? v(value) : v 
        // Check if value we are pointing on has changed
        if(historyRef.current[pointerRef.current] !== resolvedValue){
            // Delete everything after our pointer
            if(pointerRef.current < historyRef.current.length -1 ){
                historyRef.current.splice(pointerRef.current + 1)
            } 
            // Add new state to end of array
            historyRef.current.push(resolvedValue);

            // Check if beyond the capacity
            while(historyRef.current.length > capacity){
                historyRef.current.shift();
            }
            // Reset pointer to point at correct index
            pointerRef.current = historyRef.current.length - 1;
        }
        setValue(resolvedValue);
    },[capacity, value])

    // Make pointer go backwards then reset the balue
    const back = useCallback(() => {
        if(pointerRef.current <= 0)
            return;
        pointerRef.current --;
        setValue(historyRef.current[pointerRef.current])
    }, []);

    const forward = useCallback(() => {
        if(pointerRef.current >= historyRef.current.length -1)
            return;
        pointerRef.current ++;
        setValue(historyRef.current[pointerRef.current])
    }, []);

    const go = useCallback(index => {
        if(index < 0 || index >= historyRef.current.length -1)
            return;
        pointerRef.current = index;
        setValue(historyRef.current[pointerRef.current])
    }, [])

  return [
    value, 
    set,
    {
        history: historyRef.current,
        pointer: pointerRef.current,
        back, 
        forward,
        go
    },
  ]
}
