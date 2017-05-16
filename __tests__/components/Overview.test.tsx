import * as React from 'react'
import Overview from '../../src/components/Overview'
import { SlideshowModel, SlideModel } from '../../src/Models'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('Overview', () => {

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
            <Overview slideshow={show} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    });
}); 