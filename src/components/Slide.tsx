import * as React from 'react'


type slideProps = { slideIndex: number }
const Slide = (props: slideProps) => {
    return (
        <p>{props.slideIndex}</p>
    );
}

export default Slide;