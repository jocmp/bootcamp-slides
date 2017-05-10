import * as React from 'react'
import Slide from './Slide'

export type SlideShowProps = { title: string, contents: string[] }
const Slideshow = (props: SlideShowProps) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <ul>
            {props.contents.map(content =>
                <Slide content={content}/>
            )}
            </ul>
        </div>
    );
}

export default Slideshow;