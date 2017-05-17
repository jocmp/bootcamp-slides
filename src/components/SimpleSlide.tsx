import * as React from 'react'
import { SlideProps } from '../Props'
import '../stylesheets/Slides.scss'

const hasContent = (props: SlideProps): boolean => {
   return !!(props.slide && props.slide.content && props.slide.content.length > 0); 
};

const SimpleSlide = (props: SlideProps) => {
    return(
        <div className="simple-slide">
            <div className="row">
                <h3>{props.slide.title}</h3>
            </div>
            <div className="row">
                <p>{hasContent(props) && 
                    props.slide.content[0]}</p>
            </div>
        </div>
    );
};

export default SimpleSlide;