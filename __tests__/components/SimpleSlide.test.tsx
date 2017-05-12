
import * as React from 'react'
import SimpleSlide from '../../src/components/SimpleSlide'
import { SlideModel } from '../../src/Models'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('Simple Slide', () => {
    const slide: SlideModel = {
        slide_type: "simple", 
        title: "Stop-n-Go: Dijkstra Presents Semaphores", 
        content: [ "Everyone should wait their turn sometimes. It's a process." ]
    }
    it('renders', () => {
        const wrapper = shallow(<SimpleSlide slide={slide} />)
        expect(toJson(wrapper)).toMatchSnapshot();
    });

});