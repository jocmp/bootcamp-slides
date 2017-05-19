import * as React from 'react'
import { SlideshowProps } from '../Props'
import '../stylesheets/Presentation.scss'
import Overview from './Overview'
import Slides from './Slides'

const hasSlides = (props: SlideshowProps): boolean =>
    !!(props.slideshow && props.slideshow.slides);

const hasSlide = (props: SlideshowProps): boolean =>
    !!(hasSlides(props) && props.slideshow.slides[props.match.params.index]);

const hasNext = (props: SlideshowProps): boolean =>
    !!(hasSlides(props) && props.match.params.index < props.slideshow.slides.length - 1);

const hasPrevious = (props: SlideshowProps): boolean =>
    !!(hasSlides(props) && props.match.params.index > 0);

class Slideshow extends React.Component<SlideshowProps, {}> {

    initialState: SlideshowProps = {
        fetchSlideshow: null,
        handleNextSlide: null,
        handlePreviousSlide: null,
        viewSlide: null,
        history: null,
        match: null,
        slideshow: {
            id: 0,
            title: "",
            slides: []
        },
        viewedIndices: []
    };

    constructor(props: SlideshowProps) {
        super(props);
        this.state = this.initialState;
    }

    componentDidMount() {
        this.props.fetchSlideshow(this.props.match.params.id, this.props.match.params.index)
        this.props.viewSlide(parseInt(this.props.match.params.index));
    }

    render() {
        const params = this.props.match.params;
        return (
            <div className="presentation-container">
                <Overview match={this.props.match} viewSlide={this.props.viewSlide} viewedIndices={this.props.viewedIndices} slideshow={this.props.slideshow} />
                <div className="slideshow-container">
                    <div className="slideshow">
                        {hasSlide(this.props) &&
                            <Slides slide={this.props.slideshow.slides[this.props.match.params.index]} />
                        }
                    </div>
                    {hasPrevious(this.props) &&
                        <button className="previous-button" onClick={
                            this.props.handlePreviousSlide(
                                params.id, params.index,
                                this.props.slideshow.slides.length, this.props.history)
                        }>Previous</button>
                    }
                    {hasNext(this.props) &&
                        <button className="next-button" onClick={
                            this.props.handleNextSlide(
                                params.id, params.index,
                                this.props.slideshow.slides.length, this.props.history)
                        }>Next</button>
                    }
                </div>
            </div>
        )
    }
}

export default Slideshow;
