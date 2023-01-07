/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { PixelCrop } from 'react-image-crop';

const TO_RADIANS = Math.PI / 180;

async function canvasPreview(
    image: HTMLImageElement,
    canvas: HTMLCanvasElement,
    crop: PixelCrop,
    setScaleData: any,
    setScaleDataText: any,
    isText: boolean,
    rotate = 0,
) {
    const ctx = canvas.getContext('2d');

    if (!ctx) {
        throw new Error('No 2d context');
    }

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    // devicePixelRatio slightly increases sharpness on retina devices
    // at the expense of slightly slower render times and needing to
    // size the image back down if you want to download/upload and be
    // true to the images natural size.
    // const pixelRatio = window.devicePixelRatio
    const pixelRatio = 1;

    const myWidth = Math.floor(crop.width * scaleX * pixelRatio);
    const myHeight = Math.floor(crop.height * scaleY * pixelRatio);
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;

    // ctx.scale(pixelRatio, pixelRatio)
    // ctx.imageSmoothingQuality = 'high'

    const cropX = crop.x * scaleX;
    const cropY = crop.y * scaleY;

    ctx.save();

    ctx.drawImage(image, 0, 0);
    const coords = {
        cropX,
        cropY,
        myWidth,
        myHeight,
    };
    if (!isText) {
        setScaleData(coords);
    }
    setScaleDataText(coords);
    ctx.fillStyle = 'gray';
    ctx.fillRect(cropX, cropY, myWidth, myHeight);

    ctx.restore();
}

export default canvasPreview;
