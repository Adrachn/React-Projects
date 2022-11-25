// Everytime you update the state in an array you need to make sure
// you have the previous array, that you filter etc. Lots of boilerplate
// code you need to write over again for all of the arrays-Array hook
// to the rescue to properly update the state and functions to use on arrs
import {useState} from "react";


export default function useArray(defaultValue) {
    const [array, setArray] = useState(defaultValue);

    function push(element){
        setArray(a => [...a, element]);
    }
    function filter(callback){
        setArray(a => a.filter(callback));
    }
    // get all values before the index, add the new element, then the elements 
    // after the index and create a new array from that
    function update(index, newElement){
        setArray(a => [
            ...a.slice(0, index),
            newElement,
            ...a.slice(index + 1, a.length),
        ]);
    }
    // take elements before index and after, and cut out the one at the index we want to remove
    function remove(index){
        setArray(a => [...a.slice(0, index), ...a.slice(index + 1, a.length)]);
    }
    function clear(){
        setArray([]);
    }

  return (
    {array, set: setArray, push, filter, update, remove, clear}
  )
}
