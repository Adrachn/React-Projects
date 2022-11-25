import {useEffect, useRef} from "react";
// for key presses, window resizing, mouse movements, hovers etc
// window is the thing we want to use our event listener on in this case. If you want to add
// it to a specific element, just pass an element in
export default function useEventListener(eventType, callback, element = window){
    const callbackRef = useRef(callback);

    // To avoid additional re-renders we don't need
    useEffect(() => {
        callbackRef.current = callback;
    }, [callback])

    useEffect(() => {
        if(element == null)
            return;
        const handler = e => callbackRef.current(e);
        element.addEventListener(eventType, handler);

        // Remove the event listener anytime the value changes
        return () => element.removeEventListener(eventType, handler)
    }, [eventType, element])
}