/* eslint-disable no-unused-vars */
import { ChangeEvent, useCallback } from 'react';

const fileOnchangeHandler = (setFormValues: (value: any) => void) =>
    useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const { name, files } = event.target;
        setFormValues((prevState: any) => ({ ...prevState, [name]: files![0] }));
    }, []);

export default fileOnchangeHandler;
