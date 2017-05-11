import { SlideshowModel } from '../Models'
import { push } from 'react-router-redux'

export const nextSlide = (id: number, index: number = 0, totalLength: number) => (dispatch: any, getState: any) => {
    debugger
    const nextIndex = index < totalLength - 1 ? index + 1 : index;
    return `/slideshow/${id}/slides/${nextIndex}`;
};

const apiData: SlideshowModel = {
    id: 1,
    title: "Exceptional Presentation",
    slides: [
        {
            title: "Title here",
            slide_type: "title"
        },
        {
            title: "Title there",
            slide_type: "title"
        },
        {
            title: "Title everywhere",
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