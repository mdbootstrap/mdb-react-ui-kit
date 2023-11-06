import { BaseComponent } from '../../../types/baseComponent';
interface CarouselProps extends BaseComponent {
    dark?: boolean;
    fade?: boolean;
    interval?: number;
    keyboard?: boolean;
    onSlide?: () => void;
    pause?: boolean;
    showControls?: boolean;
    showIndicators?: boolean;
    touch?: boolean;
    carouselInnerClassName?: string;
}
export type { CarouselProps };
