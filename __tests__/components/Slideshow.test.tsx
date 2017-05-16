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
        slides: [slide, slide, slide]
    };

    const viewed: number[] = [];

    it('renders', () => {
        const wrapper = shallow(
            <Slideshow slideshow={show} viewedIndices={viewed}
                match={{ params: {} }} handleNextSlide={jest.fn()} viewSlide={jest.fn()} handlePreviousSlide={jest.fn()} history={history} fetchSlideshow={(id) => show} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    });

    describe('next slide event', () => {
        it('responds to next click', () => {
            const nextListener = jest.fn();

            const wrapper = shallow(<Slideshow slideshow={show} match={{ params: { index: 1 } }} viewedIndices={viewed}
                handleNextSlide={nextListener} viewSlide={jest.fn()} handlePreviousSlide={jest.fn()} history={history} fetchSlideshow={(id: number) => show} />)
            wrapper.find('.next-button').simulate('click') // optionally: stubbed out text edit event
            expect(nextListener).toHaveBeenCalled();
        });
    });

    describe('previous slide event', () => {
        it('responds to previous click', () => {
            const previousListener = jest.fn();

            const wrapper = shallow(<Slideshow slideshow={show} match={{ params: { index: 2 } }} viewedIndices={viewed}
                handleNextSlide={jest.fn()} viewSlide={jest.fn()} handlePreviousSlide={previousListener} history={history} fetchSlideshow={(id: number) => show} />)
            wrapper.find('.previous-button').simulate('click');
            expect(previousListener).toHaveBeenCalled();
        });
    });
});