import * as React from 'react'
import Slide from './Slide'

const slideIndices: number[] = [1, 2, 3]
const Slideshow = () => {
    return (
        <ul>
        {slideIndices.map(index =>
            <Slide slideIndex={index}/>
        )}
        </ul>
    );
}

export default Slideshow;