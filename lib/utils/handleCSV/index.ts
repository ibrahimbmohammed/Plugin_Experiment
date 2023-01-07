/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */

import { SetStateAction } from 'react';
import { toFlatPropertyMap } from '../helpers';

const handleCsvDownload = <T, U>(
    data1: undefined | T,
    setData: (value: SetStateAction<U[] | undefined>) => void,
    setLoading: (value: SetStateAction<boolean>) => void,
) => {
    if (data1 === undefined || !(data1 instanceof Object)) return;
    const keys = Object.keys(data1);
    const itemName = keys[0];
    if (itemName in data1) {
        const PtableData1 = data1[itemName as keyof T]['edges' as unknown as keyof T[keyof T]];
        if (PtableData1 instanceof Array) {
            PtableData1.map((node) => node?.node);
            const PflattenData = PtableData1?.map((data2) => toFlatPropertyMap<U>(data2!));

            setData(PflattenData as unknown as U[]);
            setLoading(false);
        }
    }
};

export default handleCsvDownload;
