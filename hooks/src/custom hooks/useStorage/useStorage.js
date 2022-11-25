import {useCallback, useState, useEffect} from 'react';


export function useLocalStorage(key, defaultValue) {
  return useStorage(key, defaultValue, window.localStorage);
}

export function useSessionStorage(key, defaultValue) {
    return useStorage(key, defaultValue, window.sessionStorage);
  }

  export function useStorage(key, defaultValue, storageObject) {
      const [value, setValue] = useState(() => {
          const jsonValue = storageObject.getItem(key);
          if(jsonValue != null)
            return JSON.parse(jsonValue);

          if(typeof initialValue === "function") {
              return defaultValue();              
          }
          else{
              return defaultValue;
          }
      })

      // runs everytime key, value or storageObject changes
      // if undefined - remove from storage
    useEffect(() => {
        if(value === undefined)
        return storageObject.removeItem(key);
        storageObject.setItem(key, JSON.stringify(value));
    }, [key, value, storageObject])

const remove = useCallback(() => {
    setValue(undefined);
}, [])

    return [value, setValue, remove];
  }
