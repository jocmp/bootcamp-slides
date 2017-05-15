import * as React from 'react'
import { SlideshowProps } from '../Props'
import { SlideModel } from '../Models'
import '../stylesheets/Slideshow.scss'
import Overview from './Overview'
import Slides from './Slides'

const initialState: SlideshowProps = {
    fetchSlideshow: null,
    handleNextSlide: null,
    handlePreviousSlide: null,
    history: null,
    match: null,
    slideshow: {
        id: 0,
        title: "",
        slides: []
    }
};

const hasSlide = (props: SlideshowProps) =>
    !!(props.slideshow && props.slideshow.slides && props.slideshow.slides.length);

class Slideshow extends React.Component<SlideshowProps, {}> {

    componentDidMount() {
        this.props.fetchSlideshow(this.props.match.params.id)
        console.log(this.props.match.params.id);
    }

    render() {
        const params = this.props.match.params;
        debugger
        return (
            <div>
                <p>hey</p>
                <Overview slideshow={this.props.slideshow} />
                <div className="slideshow-container">
                    <div className="slideshow">
                        <Slides slide={hasSlide(this.props) &&
                            this.props.slideshow[this.props.match.params.index]} />
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
