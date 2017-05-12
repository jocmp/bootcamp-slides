import { SlideshowModel } from '../Models'
import { push } from 'react-router-redux'
import { History } from 'history'

export const handleNextSlide = (id: string, index: string, totalLength: number, history: History) => (dispatch: any, getState: any) => {
    return () => {
        const currentIndex = parseInt(index);
        const nextIndex: number = currentIndex < totalLength - 1 ? currentIndex + 1 : currentIndex;
        handleDirection(id, nextIndex, history);   
    }
}

export const handlePreviousSlide = (id: string, index: string, totalLength: number, history: History) => {
    return () => {
        const currentIndex = parseInt(index);
        const previousIndex: number = currentIndex > 0 ? currentIndex - 1 : currentIndex;
        handleDirection(id, previousIndex, history);
    }
}

const handleDirection = (id: string, index: number, history: History) => {
    const url: string = `/slideshows/${id}/slides/${index}`;
    history.push(url);
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