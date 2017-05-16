import * as React from 'react'
import { OverviewProps } from '../Props'
import { SlideModel, SlideshowModel } from '../Models'
import OverviewItem from './OverviewItem'
import '../stylesheets/Overview.scss'

const getSlides = (slideshow: SlideshowModel): SlideModel[] => {
    if (!slideshow || !slideshow.slides) {
        return [];
    }
    return slideshow.slides;
};

const Overview = (props: OverviewProps) => {
    const slides = getSlides(props.slideshow);
    return (
        <div className="overview">
            <h4>Overview</h4>
            <ul>
                {slides.map((slide, index) =>
                    <OverviewItem viewSlide={props.viewSlide} viewed={props.viewedIndices.indexOf(index) >= 0} key={index} slideshow_id={props.slideshow.id} index={index} slide={slide} />
                )}
            </ul>
        </div>
    )
}

export default Overview;