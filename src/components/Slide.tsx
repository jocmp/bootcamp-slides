import * as React from 'react'


type slideProps = { content: string }
const Slide = (props: slideProps) => {
    return <p>{props.content}</p>;
}

export default Slide;