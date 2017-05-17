import * as React from 'react'
import TwoColumnSlide from '../../src/components/TwoColumnSlide'
import { SlideModel } from '../../src/Models'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('Two-Column Slide', () => {
    const slide: SlideModel = {
        slide_type: "two-column",
        content: ["First panel"],
        title: "Stop-n-Go: Dijkstra Presents Semaphores"
    }

    it('renders', () => {
        const wrapper = shallow(<TwoColumnSlide slide={slide} />)
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('fills available content space', () => {
        const wrapper = shallow(<TwoColumnSlide slide={slide} />);
        expect(wrapper.find('.slide-column')).toHaveLength(1);
    });

    it('fills all available content space', () => {
        const twoContentSlide = Object.assign({ content: ["First column", "Second column"], slide });
        const wrapper = shallow(<TwoColumnSlide slide={twoContentSlide} />);
        expect(wrapper.find('.slide-column')).toHaveLength(2);
    });
});