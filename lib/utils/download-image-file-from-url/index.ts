import { ToastContent, ToastOptions } from 'react-toastify';
// eslint-disable-next-line import/no-unresolved
import Toast from '@lib/utils/toast';

function downloadImageFromUrl(
    url: string,
    fileName: string,
    // eslint-disable-next-line no-unused-vars
    toastFn?: (message: ToastContent<unknown>, option?: ToastOptions<{}>) => void,
): Promise<void> {
    return new Promise((resolve, reject) => {
        try {
            fetch('/api/conference/download-conference-getdp-image', {
                method: 'POST',
                // mode: 'cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ imageUrl: url }),
            })
                .then((response) => response.blob())
                .then((blob) => {
                    const objectUrl = window.URL.createObjectURL(new Blob([blob]));
                    const link = document.createElement('a');
                    link.href = objectUrl;
                    link.setAttribute('download', fileName);
                    document.body.appendChild(link);
                    link.click();
                    link.parentNode?.removeChild(link);
                    resolve();
                })
                // eslint-disable-next-line no-unused-vars
                .catch((err) => {
                    Toast('Failed to get generate image. Try again', { type: 'error' });
                    reject();
                });
        } catch (error) {
            Toast('Failed to fetch generated dp image. Try again', { type: 'error' });
        }
    });
}

export default downloadImageFromUrl;
