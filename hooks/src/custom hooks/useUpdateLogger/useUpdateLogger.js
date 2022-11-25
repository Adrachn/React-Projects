import  {useEffect} from 'react';
// Whenever value changes - log it to the console

export default function useUpdateLogger(value){
    useEffect(()=>{
        console.log(value)
    }, [value])
}