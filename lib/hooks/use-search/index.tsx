/* eslint-disable prefer-destructuring */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import { toFlatPropertyMap } from '@lib/utils/helpers';
import { useState, ChangeEvent } from 'react';

const useSearch = <T,>(): [string, any, any, (data: T, keyData: string[]) => T[]] => {
    const [formValues, setform] = useState({
        query: ' ',
    });
    const updateForm = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setform({
            ...formValues,
            [name]: value.toLocaleLowerCase(),
        });
    };
    const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setform({ query: value });
    };
    function searchFuntion<T>(data: T, keyData: string[]) {
        if (!Array.isArray(data)) return [];
        if (formValues.query === '') return data;
        return data.filter((item) =>
            // @ts-ignore
            keyData.some((key) => item[key]?.toLowerCase()?.includes(formValues.query)),
        );
    }

    return [
        formValues.query,
        updateForm,
        selectChange,
        (data: T, keyData: string[]) => searchFuntion(data, keyData),
    ];
};

export default useSearch;
