import { ImgHTMLAttributes, VideoHTMLAttributes } from 'react';
type ImgVideo = ImgHTMLAttributes<HTMLImageElement> & VideoHTMLAttributes<HTMLVideoElement>;
type CarouselItemProps = ImgVideo & {
    captionClassName?: string;
    itemId: number;
    video?: boolean;
};
export { CarouselItemProps };
