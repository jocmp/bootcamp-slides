import { SlideModel, SlideshowModel } from './Models'

export interface SlideshowProps {
     slideshow: SlideshowModel;
     currentIndex: number;
     handleNextClick: () => void; 
}

export interface SlideProps {
    slide: SlideModel;
}
