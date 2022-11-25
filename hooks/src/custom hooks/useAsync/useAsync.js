import {useCallback, useEffect, useState} from 'react';
// For fetching URL's etc. Whenever you'd use a promise you can use this hook
// It's loading while the promise is running. Error if reject, or value is resolved
// in this example it resolves hi if resolved and error if rejected
// Error if success is false


export default function useAsync(callback, dependencies = []) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();
    const [value, setValue] = useState();

    // everytime it's run loading is set to true and error & value is reset
    const callbackMemoized = useCallback(() => {
        setLoading(true);
        setError(undefined);
        setValue(undefined);
        callback()
            .then(setValue)
            .catch(setError)
            .finally(() => setLoading(false))
    }, dependencies)

// Runs whenever callback function changes
useEffect(() => {
    callbackMemoized()
}, [callbackMemoized])

  return {loading, error, value};
  
}
