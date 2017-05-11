import * as React from 'react'
import TitleSlide from './TitleSlide'
import { SlideshowProps } from '../Props'
import { SlideModel } from '../Models'

const getSlideFromType = (slide: SlideModel) => {
    switch(slide.slide_type) {
        case "simple":
        case "two-column":
        case "title":
        default: 
            return <TitleSlide slide={slide} />
    }
};

const hasSlideForProps = (props: SlideshowProps) => {
    const slideshow = props.slideshow;
    const index = props.match.params.index;
    return slideshow && slideshow.slides && slideshow.slides[index] != null; 
}

class Slideshow extends React.Component<SlideshowProps, {}> {

    componentDidMount() {
        this.props.fetchSlideshow(this.props.match.params.id)
    }

    render() {
        return (
            <div>
                <h3>{this.props.match.params.id } at {this.props.match.params.index}</h3>
                { hasSlideForProps(this.props) &&
                    getSlideFromType(this.props.slideshow.slides[this.props.match.params.index]) } 
                <button className="next-button" onClick={this.props.handleNextClick}>Next</button>
            </div>
        )
    }
}

export default Slideshow;
