/* eslint-disable no-unused-vars */
import { ChangeEvent, useCallback } from 'react';

const inputOnchangeHandler = (setFormValues: (value: any) => void) =>
    useCallback(
        (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
            const { name, value } = event.target;
            setFormValues((prevState: any) => ({ ...prevState, [name]: value }));
        },
        [],
    );

export default inputOnchangeHandler;
