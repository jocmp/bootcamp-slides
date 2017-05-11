import * as React from 'react'
import { SlideProps } from './props'

const TitleSlide = (props: SlideProps) => {
    return <h1 className="title-slide">{props.slide.content}</h1>;
}

export default TitleSlide;