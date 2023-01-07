/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import Toast from '@utils/toast';
import isObjectEmpty from '@lib/utils/check-object-is-empty';

const useFetchQuery = <T,>(
    _url: string,
    options: {
        method: string;
        headers?: HeadersInit | undefined;
        body?: BodyInit | null | undefined;
    } = { method: 'GET' },
    dependencies: any[] = [],
): [T, (url?: string) => Promise<T | undefined> | undefined, boolean, boolean | null] => {
    const [resData, setResData] = useState<T>();
    const [dataLoading, setDataLoading] = useState<boolean>(false);
    const [dataError, setDataError] = useState<boolean | null>(false);

    // let deps: any[] | null = null;
    // if (dependencies) {
    //     [...deps] = dependencies;
    // } else {
    //     deps = [];
    // }

    async function ApiCall(url: string) {
        setDataLoading(true);
        setDataError(null);
        try {
            if (!isObjectEmpty(options?.body)) {
                const response = await fetch(url, {
                    method: options?.method,
                    headers: options?.headers,
                    body: options?.body,
                });
                const data: T = await response.json();
                setResData((prevState) => ({
                    ...prevState,
                    ...data,
                }));
                return data;
            }
            const response = await fetch(url);
            const data: T = await response.json();
            setDataLoading(false);
            setResData((prevState) => ({
                ...prevState,
                ...data,
            }));
            return data;
        } catch (error) {
            setDataLoading(false);
            setDataError(true);
            console.error('Query Error:', (error as any).message);
            // usually toast the error as a message
            Toast(error as unknown as string, { type: 'error' });
        }
    }

    useEffect(() => {
        if (_url === '' || _url === undefined) return;
        ApiCall(_url);
    }, [...dependencies]);
    return [
        resData as T,
        (url?: string) => {
            if (url) {
                return ApiCall(url);
            }
            return ApiCall(_url);
        },
        dataLoading,
        dataError,
    ];
};

export default useFetchQuery;
