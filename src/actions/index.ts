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
                    content: ['Imperically the best Super Mario game. It even included a graphics processor inside of the cartridge.']
                },
                {
                    title: "Why buy a SNES?",
                    slide_type: "simple",
                    content: ["Yoshi's Island. No question."]
                },
                {
                    title: "Game facts",
                    slide_type: "two-column",
                    content: ["By going into any level with a Fat Guy and carrying a Giant Yoshi Egg to the end of a level, the player must go to the edge of the screen past the exit and throw the egg up, then use Yoshi's tongue to push it slightly into the edge of the screen. By finishing the level like this, the next Yoshi will collect the egg as it appears to take Baby Mario, allowing the player to take a Giant Yoshi Egg into any level in the game.",
                    "Part of this game's \"character select\" theme is part of Yoshi's Island's \"Athletic\" theme. Shy Guys and Snifits also return in this game."]
                },
                {
                    title: "Birds on Yoshi's Island",
                    slide_type: "two-column",
                    content: [
                        "There are a few different bird species on Yoshi's Island. These include: Huffin Puffins and Goonies (pictured).",
                        "https://i.imgur.com/SBaejMN.jpg"
                    ]
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