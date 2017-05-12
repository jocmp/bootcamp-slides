import * as React from 'react'
import { SlideProps } from '../Props'
import '../stylesheets/Slides.css'

const hasContent = (props: SlideProps): boolean => {
   return !!(props.slide && props.slide.content && props.slide.content[0]); 
};

const SimpleSlide = (props: SlideProps) => {
    return(
        <div className="simple-slide">
            <h3>{props.slide.title}</h3>
            <p>{hasContent(props) && 
                props.slide.content[0]}</p>
        </div>
    );
};

export default SimpleSlide;