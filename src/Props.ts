import { SlideModel, SlideshowModel } from './Models'

export interface SlideshowOwnProps {
    history: any;
    match: { params: any };
}

export interface SlideshowProps extends SlideshowStateProps, SlideshowDispatchProps, SlideshowOwnProps {};

export interface SlideshowStateProps {
     slideshow: SlideshowModel;
}

export interface SlideshowDispatchProps {
    handleNextSlide: (id: number, index: number, length: number, history: any) => any; 
    handlePreviousSlide: (id: number, index: number, length: number, history: any) => any; 
    fetchSlideshow: (id: number) => void;
}


export interface SlideProps {
    slide: SlideModel;
}
