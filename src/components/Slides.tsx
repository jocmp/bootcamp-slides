import * as React from 'react';
import TitleSlide from './TitleSlide';
import SimpleSlide from './SimpleSlide';
import { SlideProps } from '../Props';

const initialState: SlideProps = {
    slide: {
        title: "",
        slide_type: "title",
    }
};

const Slides = (props: SlideProps = initialState) => {
    switch (props.slide.slide_type) {
        case "simple":
            return <SimpleSlide slide={props.slide} />
        case "two-column":
        case "title":
        default:
            return <TitleSlide slide={props.slide} />
    }
};

export default Slides;