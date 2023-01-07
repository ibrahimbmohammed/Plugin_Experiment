import { useState, useEffect } from 'react';
// eslint-disable-next-line import/no-unresolved
import Toast from '@utils/toast';
import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line import/no-unresolved
import { RootState } from '@store';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';

function useCheckSliceBeforeFetch<T>(
    url: string,
    sliceName: string,
    dispatchFn: ActionCreatorWithPayload<any, string>,
): [T | undefined] {
    const [resData, setResData] = useState<T>();
    const sliceData = useSelector((state: RootState) => state[sliceName as keyof RootState]);
    const dispatch = useDispatch();

    const ApiCall = async () => {
        try {
            const response = await fetch(url);
            const data: T = await response.json();
            setResData({ ...data });
            dispatch(dispatchFn({ ...data }));
        } catch (error) {
            Toast(error as unknown as string, { type: 'error' });
        }
    };

    useEffect(() => {
        if (sliceData?.constructor.name === 'Object' && Object.keys(sliceData as T).length > 0) {
            setResData(sliceData as T);
            // @ts-ignore
        } else if (sliceData?.constructor.name === 'Array' && sliceData?.length > 0) {
            setResData(sliceData as T);
        } else {
            ApiCall();
        }
    }, []);

    return [resData];
}

export default useCheckSliceBeforeFetch;
