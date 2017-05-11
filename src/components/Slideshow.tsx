import * as React from 'react'
import TitleSlide from './TitleSlide'
import { SlideshowProps } from '../Props'
import { SlideModel } from '../Models'
import '../stylesheets/Slideshow.css'

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

    handleNextClick(id: string, index: string, totalLength: number, history: History) {
        return () => {
            const currentIndex = parseInt(index);
            const nextIndex: number = currentIndex < totalLength - 1 ? currentIndex + 1 : currentIndex;
            this.handleDirection(id, nextIndex);   
        }
    }

    handlePreviousClick(id: string, index: string, totalLength: number, history: History) {
        return () => {
            const currentIndex = parseInt(index);
            const previousIndex: number = currentIndex > 0 ? currentIndex - 1 : currentIndex;
            this.handleDirection(id, previousIndex);
        }
    }

    handleDirection(id: string, index: number) {
        const url: string = `/slideshows/${id}/slides/${index}`;
        this.props.history.push(url);
    }

    render() {
        const params = this.props.match.params;
        return (
            <div className="slideshow-container">
                <h3>Slideshow {params.id }: {parseInt(params.index) + 1} of {this.props.slideshow.slides && this.props.slideshow.slides.length}</h3>
                <div className="slideshow">
                    { hasSlideForProps(this.props) &&
                        getSlideFromType(this.props.slideshow.slides[params.index]) } 
                </div>
                <button className="previous-button" onClick={
                        this.handlePreviousClick(params.id, params.index, this.props.slideshow.slides.length, this.props.history)
                    }>Previous</button>
                <button className="next-button" onClick={
                        this.handleNextClick(params.id, params.index, this.props.slideshow.slides.length, this.props.history)
                    }>Next</button>
            </div>
        )
    }
}

export default Slideshow;
