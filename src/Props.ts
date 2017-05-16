import { SlideModel, SlideshowModel } from './Models'

export interface SlideshowOwnProps {
    history: any;
    match: { params: any };
}

export interface SlideshowProps extends SlideshowStateProps, SlideshowDispatchProps, SlideshowOwnProps { };

export interface SlideshowStateProps {
    slideshow: SlideshowModel;
    viewedIndices: number[];
}

export interface SlideshowDispatchProps {
    handleNextSlide: (id: string, index: string, length: number, history: any) => any;
    handlePreviousSlide: (id: string, index: string, length: number, history: any) => any;
    fetchSlideshow: (id: number, index: number) => void;
    viewSlide: (id: number) => any;
}

export interface OverviewProps {
    match: { params: any };
    slideshow: SlideshowModel;
    viewedIndices: number[];
    viewSlide: (id: number) => any;
}

export interface OverviewItemProps {
    slideshow_id: number;
    index: number;
    slide: SlideModel;
    viewed: boolean;
    isCurrent: boolean;
    viewSlide: (id: number) => any;
}

export interface SlideProps {
    slide: SlideModel;
}
