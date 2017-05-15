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

const apiData = (index: number): SlideshowModel =>  {
    const shows: SlideshowModel[] = [
        {   
            id: 1,
            title: "Exceptional Presentation",
            slides: [
                {
                    title: "Title here",
                    slide_type: "title"
                },
                {
                    title: "Sensational Informational",
                    slide_type: "simple",
                    content: ["Inspirational insatiable"]
                }
            ]},
        {   
            id: 2,
            title: "Touch Fuzzy, Get Dizzy",
            slides: [
                {
                    title: "Yoshi's Island",
                    slide_type: "title",
                },
                {
                    title: "Yoshi's Island",
                    slide_type: "simple",
                    content: ['Imperically the best Super Mario game... \ntest']
                },
                {
                    title: "Why buy a SNES?",
                    slide_type: "simple",
                    content: ["Yoshi's Island. No question."]
                }
            ]}
    ]
    return shows[index];
};

export const loadSlideshow = (slideshow: SlideshowModel) => {
    return {
        type: 'LOAD_SLIDESHOW',
        slideshow
    }
};

export const fetchSlideshow = (id: number) => (dispatch: any, getState: any) => {
    dispatch(loadSlideshow(apiData(id)));
};