import {useState, useEffect} from 'react'


export default function useGeolocation(options) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [data, setData] = useState({});

    useEffect(() => {
        const successHandler = e => {
            setLoading(false);
            setError(null);
            setData(e.cords);
        }
        const errorHandler = e => {
            setError(e);
            setLoading(false);
        }
        // Give current position of person. On success return success
        navigator.geolocation.getCurrentPosition(successHandler, errorHandler, options);
        // watch for position to see if it changes
        const id = navigator.geolocation.watchPosition(successHandler, errorHandler, options);
        // if their options change, clear out and re-watch them with a new handler
        return () => navigator.geolocation.clearWatch(id)
    }, [options])

    return {loading, error, data};
}
