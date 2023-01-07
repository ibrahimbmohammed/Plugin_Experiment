/* eslint-disable no-unused-vars */
import { useState } from 'react';

const useFileUploadMutation = <T, U>(): [
    T,
    (url: string, payload: any) => Promise<T | undefined> | undefined,
] => {
    const [resData, setResData] = useState<T>();

    async function ApiCall(url: string, payload: any) {
        const response = await fetch(url, {
            method: 'POST', // or 'PUT'
            body: payload,
        });

        const res: T = await response.json();
        setResData(() => res);
        if (response.status !== 200) {
            throw res && res;
        }
        return res;
    }

    return [resData as T, (url: string, payload: U) => ApiCall(url, payload)];
};

export default useFileUploadMutation;
