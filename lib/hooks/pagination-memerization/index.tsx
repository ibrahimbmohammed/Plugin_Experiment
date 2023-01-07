import { useState, useMemo, Dispatch, SetStateAction } from 'react';

interface useMemorisedPaginatedDataProps<T> {
    arrayData: T | undefined;
    pageSize: number;
}

const useMemorisedPaginatedData = <T,>(
    arrayData: useMemorisedPaginatedDataProps<T>['arrayData'],
    pageSize: useMemorisedPaginatedDataProps<T>['pageSize'] = 5,
): [T, number, number, Dispatch<SetStateAction<number>>] => {
    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;
        return arrayData instanceof Array && arrayData?.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, arrayData]);
    return [currentTableData as unknown as T, currentPage, pageSize, setCurrentPage];
};

export default useMemorisedPaginatedData;
