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

const isCurrent = (index: number, props: OverviewProps): boolean =>
    parseInt(props.match.params.index) === index;

const isViewed = (index: number, props: OverviewProps): boolean =>
    props.viewedIndices.indexOf(index) >= 0;

const Overview = (props: OverviewProps) => {
    const slides = getSlides(props.slideshow);
    return (
        <div className="overview">
            <h4>Overview</h4>
            <ul>
                {slides.map((slide, index) =>
                    <OverviewItem isCurrent={isCurrent(index, props)}
                        viewSlide={props.viewSlide} viewed={isViewed(index, props)}
                        key={index} slideshow_id={props.slideshow.id} index={index} slide={slide} />
                )}
            </ul>
        </div>
    )
}

export default Overview;