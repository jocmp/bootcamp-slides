import * as React from 'react'
import { SlideProps } from '../Props'
import '../stylesheets/Slides.scss'

const initialState: SlideProps = {
    slide: {
        title: "",
        slide_type: "simple",
        content: [""]
    }
};

const SimpleSlide = (props: SlideProps = initialState) => {
    return (
        <div className="simple-slide">
            <div className="row">
                <h3>{props.slide.title}</h3>
            </div>
            <div className="row">
                <p>{props.slide.content[0]}</p>
            </div>
        </div>
    );
};

export default SimpleSlide;