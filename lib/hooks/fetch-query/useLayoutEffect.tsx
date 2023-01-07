/* eslint-disable consistent-return */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import Toast from '@utils/toast';

const useFetchQuery = <T,>(
    _url: string,
): [T, (url: string) => Promise<T | undefined> | undefined, boolean] => {
    const [resData, setResData] = useState<T>();
    const [dataLoading, setDataLoading] = useState<boolean>(false);
    setTimeout(() => {}, 1000);
    async function ApiCall(url: string) {
        const arrayElement = url?.split('/');
        const lastElement = arrayElement.slice(-1);
        if (lastElement[0] === 'undefined' || lastElement[0] === ' ') return;
        setDataLoading(true);

        try {
            const response = await fetch(url);
            const data: T = await response.json();
            setResData({ ...data });
            setDataLoading(false);
            return data;
        } catch (error) {
            setDataLoading(false);
            // usually toast the error as a message
            Toast(error as unknown as string, { type: 'error' });
        }
    }

    useEffect(() => {
        const arrayElement = _url?.split('/');
        const lastElement = arrayElement.slice(-1);

        if (lastElement[0] === 'undefined' || lastElement[0] === '') return;
        if (lastElement[0] !== 'undefined') {
            ApiCall(_url);
        }
    }, [_url]);
    return [
        resData as T,
        (url?: string) => {
            if (url) {
                if (url === '') return;
                const arrayElement = url?.split('/');
                const lastElement = arrayElement.slice(-1);
                if (lastElement[0] === 'undefined') return;

                return ApiCall(url);
            }
            const arrayElement = _url?.split('/');
            const lastElement = arrayElement.slice(-1);
            if (url === '') return;
            if (lastElement[0] === 'undefined') return;

            return ApiCall(_url);
        },
        dataLoading,
    ];
};

export default useFetchQuery;
