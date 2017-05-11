import * as React from 'react'
import Slideshow from '../../src/components/Slideshow'
import { SlideshowProps } from '../../src/Props' 
import { SlideshowModel, SlideModel } from '../../src/Models'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('Slideshow', () => {
    const slide: SlideModel = {
        title: "Exciting Slide",
        slide_type: "title",
    }; 
    const show: SlideshowModel = {
        id: 1,
        title: "Exciting Presentation",
        slides: [ slide, slide, slide ]
    };
    
    // it('renders', () => {
    //     const wrapper = shallow(
    //         <Slideshow slideshow={show} match={ { params: {}} } handleNextClick={jest.fn()} fetchSlideshow={(id: number) => show} />)
    //     expect(toJson(wrapper)).toMatchSnapshot()
    // });

    // it('responds to next click', () => {
    //     const nextListener = jest.fn();
    //     const wrapper = shallow(
    //         <Slideshow slideshow={show} match={ { params: {}} } handleNextClick={nextListener} fetchSlideshow={(id: number) => show} />)
    //     wrapper.find('.next-button').simulate('click') // optionally: stubbed out text edit event
    //     expect(nextListener).toHaveBeenCalled()
    // });
});