import {useState} from "react";
import {useEffect} from "react/cjs/react.development";

export default function useSize(ref){
    const [size, setSize] = useState({});

    // If we have a reference, use that
    useEffect(() => {
        if(ref.current == null)
            return;
            // create resize observer to keep track if our ref changes
            const observer = new ResizeObserver(([entry]) => setSize(entry.contentRect));
            observer.observe(ref.current);
            // when done, disconnect observer
            return () => observer.disconnect();
    }, [])
    return size;
}



