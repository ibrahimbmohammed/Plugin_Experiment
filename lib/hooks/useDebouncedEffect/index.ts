/* eslint-disable prefer-spread */
// @ts-nocheck
import { useEffect, DependencyList } from 'react';

function useDebounceEffect(fn: () => void, waitTime: number, deps?: DependencyList) {
    useEffect(() => {
        const t = setTimeout(() => {
            fn.apply(undefined, deps);
        }, waitTime);

        return () => {
            clearTimeout(t);
        };
    }, deps);
}

export default useDebounceEffect;
