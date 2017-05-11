import * as React from 'react'
import Slideshow from '../../src/components/Slideshow'
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
    
    it('renders', () => {
        const wrapper = shallow(<Slideshow slideshow={show} currentIndex={0} handleNextClick={jest.fn()} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    });

    it('responds to next click', () => {
        const nextListener = jest.fn();
        const wrapper = shallow(<Slideshow slideshow={show} currentIndex={0} handleNextClick={nextListener} />)
        wrapper.find('.next-button').simulate('click') // optionally: stubbed out text edit event
        expect(nextListener).toHaveBeenCalled()
    });
});