import { SlideshowModel } from '../Models'
import { push } from 'react-router-redux'
import { History } from 'history'

export const nextSlide = (id: string, index: string, totalLength: number) => {
    const currentIndex = parseInt(index);
    const nextIndex: number = currentIndex < totalLength - 1 ? currentIndex + 1 : currentIndex;
    return getDirectionUrl(id, nextIndex);   
}

export const previousSlide = (id: string, index: string, totalLength: number) => {
    const currentIndex = parseInt(index);
    const previousIndex: number = currentIndex > 0 ? currentIndex - 1 : currentIndex;
    return getDirectionUrl(id, previousIndex);
}

const getDirectionUrl = (id: string, index: number) => {
    return `/slideshows/${id}/slides/${index}`;
}

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