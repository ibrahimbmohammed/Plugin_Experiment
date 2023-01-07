// eslint-disable-next-line import/no-unresolved
import { getCookie, setCookie } from '@lib/utils/cookies';
// eslint-disable-next-line import/no-unresolved
import Toast from '@lib/utils/toast';
import { useEffect, useState } from 'react';

function useCheckCookieBeforeFetch<T>(url: string, cookieName: string): string {
    const cookieValue = getCookie(cookieName);
    const [resData, setResData] = useState<string>();

    const ApiCall = async () => {
        try {
            const response = await fetch(url);
            const data: T = await response.json();
            setResData(data[cookieName as keyof T] as unknown as string);
            setCookie(cookieName, data[cookieName as keyof T]);
        } catch (error) {
            Toast(error as unknown as string, { type: 'error' });
        }
    };

    useEffect(() => {
        if (cookieValue === undefined || cookieValue === null) {
            ApiCall();
        } else {
            setResData(cookieValue);
        }
    }, []);

    return resData as string;
}

export default useCheckCookieBeforeFetch;
