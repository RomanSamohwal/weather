import {useEffect, useRef} from "react";

export function useInterval(callback: any, delay : any) {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            // @ts-ignore
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay * 1000);
            return () => clearInterval(id);
        }
    }, [delay]);
}
