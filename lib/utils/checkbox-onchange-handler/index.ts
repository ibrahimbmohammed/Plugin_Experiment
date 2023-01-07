/* eslint-disable no-unused-vars */
import { ChangeEvent, useCallback } from 'react';

const checkboxOnchangeHandler = (setFormValues: (value: any) => void) =>
    useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = event.target;
        setFormValues((prevState: any) => ({ ...prevState, [name]: checked }));
    }, []);

export default checkboxOnchangeHandler;
