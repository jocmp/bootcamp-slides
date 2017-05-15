import * as React from 'react';
import TitleSlide from './TitleSlide';
import SimpleSlide from './SimpleSlide';
import { SlideModel } from '../Models';

const initialState: SlideModel = {
    title: "",
    slide_type: "title",
}
const Slides = (slide: any = initialState) => {
    debugger
    switch (slide.slide_type) {
        case "simple":
            return <SimpleSlide slide={slide} />
        case "two-column":
        case "title":
        default:
            return <TitleSlide slide={slide} />
    }
};

export default Slides;