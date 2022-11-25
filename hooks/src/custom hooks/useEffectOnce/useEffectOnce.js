// only runs once since we have an empty array
// Quality of life hook, don't have to include the 
// empty array [] every time. Feels a bit excessive?..
import {useEffect} from "react";

export default function useEffectOnce(cb){
    useEffect(cb, []);
}