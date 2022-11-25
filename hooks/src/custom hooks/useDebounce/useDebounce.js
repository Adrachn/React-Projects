// Use something after a certain delay
// Like a search field. Type some and after you've stopped typing query API. Instead of every 
// sending a query time you type a letter


import {useEffect} from 'react'
import useTimeout from '../useTimeout/useTimeout'

export default function useDebounce(callback, delay, dependencies) {
    const {reset, clear} = useTimeout(callback, delay);
    useEffect(reset, [...dependencies, reset]); // reset is called every time our dependencies are changed
    useEffect(clear, []); // clear the timeout first time it renders. Else we will get alert even without typing

  return (
    <div>useDebounce</div>
  )
}
