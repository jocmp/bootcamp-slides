import * as React from 'react'
import TitleSlide from './TitleSlide'
import SimpleSlide from './SimpleSlide'
import { SlideshowProps } from '../Props'
import { SlideModel, SlideshowModel } from '../Models'
import OverviewItem from './OverviewItem'
import '../../public/stylesheets/Overview.css'

const getSlides = (slideshow: SlideshowModel): SlideModel[] => {
    if (!slideshow || !slideshow.slides) {
        return [];
    }
    return slideshow.slides;
};

const Overview = (props: any) => {
        const slides = getSlides(props.slideshow);
        return (
            <div className="overview">
                <h4>Overview</h4>
                <ul>
                    { slides.map(slide =>
                        <OverviewItem slide={slide} />
                    )}
                </ul>
            </div>
        )
}

export default Overview;