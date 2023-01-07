/* eslint-disable import/prefer-default-export */
import NextBaseImage, { ImageProps } from 'next/image';

const isStorybook = process.env.STORYBOOK_ENV === 'storybook';
const StorybookNextImage: React.FC<ImageProps> = (props) => (
    <NextBaseImage
        {...props}
        loader={({ src }) => {
            return src;
        }}
    />
);
export const NextImage = !isStorybook
    ? NextBaseImage
    : (StorybookNextImage as typeof NextBaseImage);

export default NextImage;
