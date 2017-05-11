import { SlideshowModel } from '../Models'

export const nextSlide = (index: number = 0, totalLength: number) => ({
    type: 'SET_NEXT_SLIDE',
    currentIndex: index < totalLength - 1 ? index + 1 : index
});

const apiData: SlideshowModel = {
    id: 1,
    title: "Exceptional Presentation",
    slides: [
        {
            title: "Title here",
            slide_type: "title"
        }
    ]
};

export const loadSlideshow = (slideshow: SlideshowModel) => {
    return {
        type: 'LOAD_SLIDESHOW',
        slideshow
    }
};

export const fetchSlideshow = (id: number) => (dispatch: any, getState: any) => {
    dispatch(loadSlideshow(apiData));
};