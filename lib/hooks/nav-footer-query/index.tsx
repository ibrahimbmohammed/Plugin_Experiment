import { useState, useEffect } from 'react';
import Toast from '@utils/toast';
// import { useAppSelector, useAppDispatch } from '@lib/hooks/redux-hooks';
// import { setUserEmail } from '@store/user-email';

const useFetchQuery = <T,>(url: string) => {
    const [resData, setResData] = useState<T>();
    // const userEmail = useAppSelector((state) => state.userEmail.email);
    // const dispatch = useAppDispatch();
    //   dispatch(setUserEmail(userData.email));
    async function ApiCall() {
        try {
            const response = await fetch(url);
            const data: T = await response.json();
            setResData({ ...data });
        } catch (error) {
            // usually toast the error as a message
            Toast(error as unknown as string, { type: 'error' });
        }
    }

    useEffect(() => {
        ApiCall();
    }, []);
    return [resData];
};

export default useFetchQuery;
