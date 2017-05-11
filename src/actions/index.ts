import { SlideshowProps } from '../Props'

export const nextSlide = (props: SlideshowProps) => ({
    type: 'SET_NEXT_SLIDE',
    currentIndex: nextIndex(props), 
    slideshow: props.slideshow
})

const nextIndex = (props: SlideshowProps): number => {
    const index: number = props.currentIndex;
    const length: number = props.slideshow.slides.length;
    return index < length - 1 ? index + 1 : index; 
}