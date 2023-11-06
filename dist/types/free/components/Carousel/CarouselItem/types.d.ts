import { BaseComponent } from 'src/types/baseComponent';
type CarouselItemProps = BaseComponent & {
    itemId: number;
    interval?: number;
};
export type { CarouselItemProps };
