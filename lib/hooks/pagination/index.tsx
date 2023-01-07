/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import type { SetStateAction } from 'react';
import { usePagination, DOTS } from './p-config';
// TODO: revisit the typeing of this component

interface PagProp {
    onPageChange: (param: number | SetStateAction<number> | string) => void;
    totalCount: number;
    siblingCount?: number | undefined;
    currentPage: number;
    pageSize: number;
    className?: string;
}

const Pagination = ({
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
}: PagProp) => {
    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize,
    });

    const lastPage = paginationRange?.length ? paginationRange[paginationRange.length - 1] : 1;
    // If there are less than 2 times in pagination range we shall not render the component
    if (currentPage === 0 || (paginationRange && paginationRange.length < 2) || lastPage === 1) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    return (
        <ul className={`my-5 flex list-none justify-center ${className}`}>
            {/* Left navigation arrow */}

            <li
                role="button"
                className={`text-md my-auto mx-4 box-border flex h-32 min-w-min cursor-pointer items-center rounded-md px-2 text-center leading-4 tracking-normal ${
                    currentPage === 1 ? 'cursor-default' : ''
                }`}
                onClick={() => (currentPage !== 1 ? onPrevious() : null)}
                onKeyDown={() => (currentPage !== 1 ? onPrevious() : null)}
            >
                <div className="arrow left">
                    <svg
                        width="8"
                        height="12"
                        viewBox="0 0 8 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.41 1.41L6 0L0 6L6 12L7.41 10.59L2.83 6L7.41 1.41Z"
                            fill={currentPage === 1 ? '#CCCCCC' : '#323232'}
                        />
                    </svg>
                </div>
            </li>
            {paginationRange?.map((pageNumber) => {
                // If the pageItem is a DOT, render the DOTS unicode character
                if (pageNumber === DOTS) {
                    return (
                        <li
                            key={pageNumber}
                            className="text-md my-auto mx-4 box-border flex min-w-min cursor-pointer items-center rounded-full p-3 px-4 text-center leading-4 tracking-normal"
                        >
                            &#8230;
                        </li>
                    );
                }

                // Render our Page Pills
                return (
                    <li
                        role="button"
                        key={pageNumber}
                        className={`text-md my-auto mx-4 box-border flex min-w-min cursor-pointer items-center rounded-full p-3 px-4 text-center leading-4 tracking-normal hover:bg-gray-300 ${
                            pageNumber === currentPage ? 'bg-gray-300' : ''
                        }`}
                        onClick={() => onPageChange(pageNumber)}
                    >
                        {pageNumber}
                    </li>
                );
            })}
            {/*  Right Navigation arrow */}
            <li
                role="button"
                className={`text-md my-auto mx-4 box-border flex h-32 min-w-min cursor-pointer items-center rounded-md px-2 text-center leading-4 tracking-normal ${
                    currentPage === lastPage ? 'cursor-default' : ''
                }`}
                onClick={() => (currentPage !== lastPage ? onNext() : null)}
            >
                <div className="arrow right">
                    <svg
                        width="8"
                        height="12"
                        viewBox="0 0 8 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1.99997 0L0.589966 1.41L5.16997 6L0.589966 10.59L1.99997 12L7.99997 6L1.99997 0Z"
                            fill={currentPage === lastPage ? '#CCCCCC' : '#323232'}
                        />
                    </svg>
                </div>
            </li>
        </ul>
    );
};

export default Pagination;
