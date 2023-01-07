import { DependencyList, useEffect, useRef } from 'react';
// import isObjectEmpty from '@lib/utils/check-object-is-empty';

// function checkIfArrElementsAreTruthy(arr: DependencyList) {
//     return arr.every(element => !isObjectEmpty(element) && true)
//   }

/**
 * A run only once useEffect Hook. Will run only once. Initially implemented to control conditions on dependency from inside, but changed to give you all the control over your dependency list
 * @param {Function} callback The callback function you want to pass to the useEffect
 * @param {DependencyList} DependencyList The DependencyList array
 * https://www.robinwieruch.de/react-useeffect-only-once/
 */
function useDidMountEffect(callback: Function, dependencies: DependencyList) {
    // makes your use effect run only once and only if your dependencies are truthy
    const didMount = useRef(false);
    useEffect(() => {
        if (didMount.current) {
            return;
        }
        // wont run when any of the items dependency array is undefined
        const isUndefined = (element: unknown) => typeof element === 'undefined';
        if (dependencies.some(isUndefined)) return;
        callback();
        didMount.current = true;
    }, [...dependencies]);
}

export default useDidMountEffect;
