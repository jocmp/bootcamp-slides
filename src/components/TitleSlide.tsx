import * as React from 'react'
import { SlideProps } from '../Props'

const TitleSlide = (props: SlideProps) => {
    return <h1 className="title-slide">{props.slide.title}</h1>;
}

export default TitleSlide;