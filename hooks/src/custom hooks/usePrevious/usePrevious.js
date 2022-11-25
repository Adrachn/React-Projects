// If you need to store the previous value of some state
// and access it for whatever reason
import {useRef} from "react";


export default function usePrevious(value) {
    const currentRef = useRef(value);
    const previousRef = useRef();

    // check if the value has changed, then our count in the component has changed -> update
    // save what the value is and what the value used to be
    if(currentRef.current !== value){
        previousRef.current = currentRef.current;
        currentRef.current = value;
    }

    return previousRef.current;
}
