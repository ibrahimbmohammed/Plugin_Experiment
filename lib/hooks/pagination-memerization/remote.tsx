import { useState, useMemo, Dispatch, SetStateAction } from 'react';

interface useMemorisedPaginatedDataProps<T> {
    arrayData: T | undefined;
    endCursor: string | null | undefined;
    pageSize: number;
}

const useMemorisedPaginatedData = <T,>(
    arrayData: useMemorisedPaginatedDataProps<T>['arrayData'],
    endCursor: string,
    pageSize: useMemorisedPaginatedDataProps<T>['pageSize'] = 5,
): [
    T,
    number,
    number,
    Dispatch<SetStateAction<number>>,
    string,
    Dispatch<SetStateAction<string>>,
] => {
    const [currentPage, setCurrentPage] = useState(1);
    const [currentCursor, setCurrentCursor] = useState(endCursor);
    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;
        return arrayData instanceof Array && arrayData?.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, arrayData]);
    return [
        currentTableData as unknown as T,
        currentPage,
        pageSize,
        setCurrentPage,
        currentCursor,
        setCurrentCursor,
    ];
};

export default useMemorisedPaginatedData;

//
