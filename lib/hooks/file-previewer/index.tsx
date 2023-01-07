/* eslint-disable no-unused-vars */
import { useState } from 'react';

function useFilePreviewer(): [
    string | ArrayBuffer | null,
    any,
    (event: {
        target: {
            files: string | any[];
        };
    }) => void,
] {
    const [image, setImage] = useState<string | ArrayBuffer | null>(null);
    const [imageFile, setImageFile] = useState<any>('');

    const onSelectFile = (event: { target: { files: string | any[] } }, resetFn?: () => void) => {
        if (event === null) {
            // setImage(null);
            // setImageFile(null);
            return;
        }
        if (event.target.files && event.target.files.length > 0) {
            setImageFile(event.target.files);
            const reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.addEventListener('load', () => {
                setImage(reader.result);
            });
        }
    };
    return [image, imageFile, onSelectFile];
}

export default useFilePreviewer;
