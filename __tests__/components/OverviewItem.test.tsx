import * as React from 'react'
import OverviewItem from '../../src/components/OverviewItem'
import { SlideModel } from '../../src/Models'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('OverviewItem', () => {

    const slide: SlideModel = {
        title: "Exciting Slide",
        slide_type: "title",
    }; 

    it('renders', () => {
        const wrapper = shallow(
            <OverviewItem viewSlide={jest.fn()} viewed={false} slide={slide} slideshow_id={1} index={0} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    });
});