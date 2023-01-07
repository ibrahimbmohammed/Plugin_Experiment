/* eslint-disable import/no-unresolved */
import { PixelCrop } from 'react-image-crop';
import canvasPreview from '@lib/utils/canvas-preveiw';

let previewUrl = '';

function toBlob(canvas: HTMLCanvasElement): Promise<Blob> {
    return new Promise((resolve) => {
        // @ts-ignore
        canvas.toBlob(resolve);
    });
}

// Returns an image source you should set to state and pass
// `{previewSrc && <img alt="Crop preview" src={previewSrc} />}`
async function imgPreview(
    image: HTMLImageElement,
    crop: PixelCrop,
    setScaleData: any,
    setScaleDataText: any,
    isText: boolean,
    rotate = 0,
) {
    const canvas = document.createElement('canvas');
    canvasPreview(image, canvas, crop, setScaleData, setScaleDataText, isText, rotate);

    const blob = await toBlob(canvas);
    if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
    }

    previewUrl = URL.createObjectURL(blob);
    return previewUrl;
}

export default imgPreview;
