import * as React from 'react'
import Overview from '../../src/components/Overview'
import { SlideshowModel, SlideModel } from '../../src/Models'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('Overview', () => {

    const slide: SlideModel = {
        title: "Exciting Slide",
        slide_type: "title"
    };

    const show: SlideshowModel = {
        id: 1,
        title: "Exciting Presentation",
        slides: [slide, slide, slide]
    };

    const viewed: number[] = [];

    const getWrapper = () => {
        return shallow(<Overview match={{ params: {} }} viewSlide={jest.fn()} viewedIndices={viewed} slideshow={show} />);
    }

    it('renders', () => {
        expect(toJson(getWrapper())).toMatchSnapshot()
    });

    it('displays title in header', () => {
        expect(getWrapper().find('h4').text()).toContain(show.title);
    });
}); 