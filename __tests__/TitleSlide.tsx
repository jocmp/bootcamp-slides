import * as React from 'react'
import TitleSlide from '../src/components/TitleSlide'
import { SlideModel } from '../src/Models'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('TitleSlide', () => {
    const slide: SlideModel = {
        slide_type: "title", 
        title: "Stop-n-Go: Dijkstra Presents Semaphores" 
    }
    it('renders', () => {
        const wrapper = shallow(<TitleSlide slide={slide} />)
        expect(toJson(wrapper)).toMatchSnapshot();
    });

});