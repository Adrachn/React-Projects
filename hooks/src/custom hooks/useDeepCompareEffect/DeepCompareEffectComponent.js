import {useEffect, useState, useRef} from 'react';
import useDeepCompareEffect from './useDeepCompareEffect';
// Works very similar to a normal useEffect, but instead of comparing references
// we are comparing the actual values of the objects being passed to
// UseEffect is by default comparing object references. Is this "person object reference"
// the same as the previous person object reference? But since  our person object is being defined inside
// our function, everytime our function re-renders(everytime we increment our age or otherCount), it creates 
// a braind new person variable, different from the previous one, so useEffect will always run. The deepcompareeffect
// doesn't care about object references - it compares the value. SO does not run every time
// otherwise you would have to get around it with a useMemo:
// const person = useMemo({age: age, name: "Fjöll"}, [age])

export default function DeepCompareEffectComponent() {
    const [age, setAge] = useState(0);
    const [otherCount, setOtherCount] = useState(0);
    // Counters to keep track of how many times we are running these different effects
    const useEffectCountRef = useRef();
    const useDeepCompareEffectCountRef = useRef();

    const person = {age: age, name: "Fjöll"};

    // Effects below just increment counter by 1
    useEffect(() => {
        useEffectCountRef.current.textContent = parseInt(useEffectCountRef.current.textContent) + 1
    }, [person]);

    useDeepCompareEffect(() => {
        useDeepCompareEffectCountRef.current.textContent = parseInt(useDeepCompareEffectCountRef.current.textContent) +1
    }, [person])

  return (
    <div>
        <div>
            useEffect: <span ref={useEffectCountRef}>0</span>
        </div>
        <div>
            useDeepCompareEffect: <span ref={useDeepCompareEffectCountRef}>0</span>
        </div>
        <div>Other Count: {otherCount}</div>
        <div>{JSON.stringify(person)}</div>
        <button onClick={() => setAge(currentAge => currentAge + 1)}>Increment Age</button>
        <button onClick={() => setOtherCount(count => count + 1)}>Increment Other Count</button>
    </div>
  )
}
