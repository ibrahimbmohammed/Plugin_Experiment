import { useCallback, useState } from 'react';

// Hook
// Parameter is the boolean, with default "false" value
const useToggle = (initialState: boolean = false): [boolean, any] => {
    // Initialize the state
    const [state, setState] = useState<boolean>(initialState);
    // Define and memorize toggler function in case we pass down the comopnent,
    // This function change the boolean value to it's opposite value
    const toggle = useCallback((): void => setState((prevState) => !prevState), []);
    return [state, toggle];
};

export default useToggle;
