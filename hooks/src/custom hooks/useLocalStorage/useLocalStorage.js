  // Persist data to local storage through page refresh
import {useState, useEffect} from "react";

function getSavedValue(key, initialValue){
    const savedValue = JSON.parse(localStorage.getItem(key)); //gets item we have stored at key
    if(savedValue) return savedValue

    if(initialValue instanceof Function) return initialValue();
      return initialValue;
}

export default function useLocalStorage(key, initialValue){

  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue) // to run the slow JSON parse only once
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value)); // need to convert since can only pass string values to local storage
  }, [value])

  return [value, setValue];
}