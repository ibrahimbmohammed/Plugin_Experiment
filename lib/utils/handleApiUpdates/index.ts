/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */

import { SetStateAction } from 'react';
import { toFlatPropertyMap } from '../helpers';

const handleApiUpdate = <T, U>(
    data1: undefined | T,
    setData: (value: SetStateAction<U[] | undefined>) => void,
    setCursor: (value: SetStateAction<string>) => void,
    setTotalRows: (value: SetStateAction<number>) => void,
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
            const totalCount =
                data1[itemName as keyof T]['totalCount' as unknown as keyof T[keyof T]];
            const endCursor =
                data1[itemName as keyof T]['pageInfo' as unknown as keyof T[keyof T]][
                    'endCursor' as unknown as keyof T[keyof T][keyof T[keyof T]]
                ];
            setData(PflattenData as unknown as U[]);
            setCursor(endCursor as unknown as string);
            setTotalRows(totalCount as unknown as number);
            setLoading(false);
        }
    }
};

export default handleApiUpdate;
