import { SlideshowModel } from '../Models'
import { History } from 'history';

export const nextSlide = (id: string, index: string, totalLength: number, history: History) => {
    const currentIndex = parseInt(index);
    const nextIndex: number = currentIndex < totalLength - 1 ? currentIndex + 1 : currentIndex;
    return handleSlide(id, nextIndex, history);
}

export const previousSlide = (id: string, index: string, totalLength: number, history: History) => {
    const currentIndex = parseInt(index);
    const previousIndex: number = currentIndex > 0 ? currentIndex - 1 : currentIndex;
    return handleSlide(id, previousIndex, history);
}

const handleSlide = (id: string, index: number, history: History) => {
    history.push(`/slideshows/${id}/slides/${index}`);
    return viewSlide(index);
}

export const viewSlide = (index: number) => {
    return {
        type: 'VIEW_SLIDE',
        index
    };
}

const apiData = (index: number): SlideshowModel => {
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
            ]
        },
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
            ]
        }
    ]
    return shows[index - 1];
};

export const loadSlideshow = (slideshow: SlideshowModel, currentIndex: number) => {
    return {
        type: 'LOAD_SLIDESHOW',
        slideshow,
        currentIndex
    }
};

export const fetchSlideshow = (id: number, index: number = 0) => (dispatch: any, getState: any) => {
    dispatch(loadSlideshow(apiData(id), index));
};