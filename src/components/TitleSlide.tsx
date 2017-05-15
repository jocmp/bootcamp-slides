import * as React from 'react'
import { SlideProps } from '../Props'
import '../stylesheets/Slides.scss'

const TitleSlide = (props: SlideProps) => {
    return(
        <div className="title-slide">
            <h1>{props.slide.title}</h1>
        </div>
    );
};

export default TitleSlide;