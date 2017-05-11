import { SlideModel, SlideshowModel } from './Models'

export interface SlideshowOwnProps {
    match: { params: any };
}

export interface SlideshowProps extends SlideshowStateProps, SlideshowDispatchProps, SlideshowOwnProps {};

export interface SlideshowStateProps {
     slideshow: SlideshowModel;
}

export interface SlideshowDispatchProps {
    handleNextClick: any; 
    fetchSlideshow: (id: number) => void;
}


export interface SlideProps {
    slide: SlideModel;
}
