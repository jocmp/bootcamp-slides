import * as React from 'react'
import TitleSlide from './TitleSlide'
import SimpleSlide from './SimpleSlide'
import { SlideshowProps } from '../Props'
import { SlideModel } from '../Models'
import '../../public/stylesheets/Slideshow.css'
import Overview from './Overview'

const getSlideFromType = (slide: SlideModel) => {
    switch(slide.slide_type) {
        case "simple":
            return <SimpleSlide slide={ slide } />
        case "two-column":
        case "title":
        default: 
            return <TitleSlide slide={ slide } />
    }
};

const hasSlideForProps = (props: SlideshowProps): boolean => {
    const slideshow = props.slideshow;
    const index = props.match.params.index;
    return !!(slideshow && slideshow.slides && slideshow.slides[index]); 
}

class Slideshow extends React.Component<SlideshowProps, {}> {

    componentDidMount() {
        this.props.fetchSlideshow(this.props.match.params.id)
    }

    render() {
        const params = this.props.match.params;
        return (
            <div>
                <Overview slideshow={this.props.slideshow} />
                <div className="slideshow-container">
                    <div className="slideshow">
                        { hasSlideForProps(this.props) &&
                            getSlideFromType(this.props.slideshow.slides[params.index]) } 
                    </div>
                    <button className="previous-button" onClick={
                            this.props.handlePreviousSlide(
                                params.id, params.index, 
                                this.props.slideshow.slides.length, this.props.history)
                        }>Previous</button>
                    <button className="next-button" onClick={
                            this.props.handleNextSlide(
                                params.id, params.index, 
                                this.props.slideshow.slides.length, this.props.history)
                        }>Next</button>
                </div>
            </div>
        )
    }
}

export default Slideshow;
