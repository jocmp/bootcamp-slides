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
    handleNextSlide: (id: string, index: string, length: number, history: any) => any; 
    handlePreviousSlide: (id: string, index: string, length: number, history: any) => any; 
    fetchSlideshow: (id: number) => void;
}

export interface OverviewItemProps {
    slide: SlideModel;
}

export interface SlideProps {
    slide: SlideModel;
}
