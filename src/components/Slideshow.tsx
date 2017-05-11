import * as React from 'react'
import TitleSlide from './TitleSlide'
import { SlideshowProps } from '../Props'
import { SlideModel } from '../Models'

const getSlideFromType = (slide: SlideModel) => {
    switch(slide.slide_type) {
        case "simple":
        case "two-column":
        case "title":
        default: 
            return <TitleSlide slide={slide} />
    }
};

const Slideshow = (props: SlideshowProps) => {
    return (
        <div>
            { getSlideFromType(props.slideshow.slides[props.currentIndex]) } 
            <button className="next-button" onClick={props.handleNextClick}>Next</button>
        </div>
    );
} 

export default Slideshow;