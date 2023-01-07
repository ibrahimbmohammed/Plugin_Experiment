/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';

const useNavigation = <T, U>(
    extractedData: T,
    dataRetured: U | undefined,
): [number, T | undefined, (node: typeof extractedData, index: number) => void] => {
    const [pageStateData, setDirectorData] = useState<typeof extractedData>();
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        setDirectorData(extractedData ?? pageStateData);
    }, [dataRetured]);

    const handleChange = (node: any, index: number) => {
        setDirectorData(node);
        setCurrentIndex(index);
    };

    return [currentIndex, pageStateData, handleChange];
};

export default useNavigation;
