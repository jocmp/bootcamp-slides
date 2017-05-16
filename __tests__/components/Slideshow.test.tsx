import * as React from 'react'
import Slideshow from '../../src/components/Slideshow'
import { SlideshowProps } from '../../src/Props' 
import { SlideshowModel, SlideModel } from '../../src/Models'
import { shallow, ShallowWrapper } from 'enzyme'
import toJson from 'enzyme-to-json'
import createBrowserHistory from 'history/createBrowserHistory' 

describe('Slideshow', () => {
    const history = createBrowserHistory();

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
        const wrapper = shallow(
            <Slideshow slideshow={show} 
                match={ { params: {}} } handleNextSlide={jest.fn()} handlePreviousSlide={jest.fn()} history={history} fetchSlideshow={(id) => show} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    });

    describe('next slide event', () => {
        it('responds to next click', () => {
            const currentIndex: string = "0";
            const nextListener = jest.fn();

            const wrapper = shallow(<Slideshow slideshow={show} match={ { params: { index: 1 }} }  
                    handleNextSlide={nextListener} handlePreviousSlide={jest.fn()} history={history} fetchSlideshow={(id: number) => show} />)
            wrapper.find('.next-button').simulate('click') // optionally: stubbed out text edit event
            expect(nextListener).toHaveBeenCalled();
        });
    });

    describe('previous slide event', () => {
        it('responds to previous click', () => {
            const currentIndex: string = "1";
            const previousListener = jest.fn();

            const wrapper = shallow(<Slideshow slideshow={show} match={ { params: { index: 2 }} }  
                    handleNextSlide={jest.fn()} handlePreviousSlide={previousListener} history={history} fetchSlideshow={(id: number) => show} />)
            wrapper.find('.previous-button').simulate('click');
            expect(previousListener).toHaveBeenCalled();
        });
    });
});