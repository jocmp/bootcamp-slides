import * as React from 'react'
import Slideshow from '../src/components/Slideshow'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('Slideshow', () => {
    // const props = {
    //     title: "Exciting Slideshow",
    //     contents: ["Fact about slides"]
    // };
    it('renders', () => {
        const wrapper = shallow(<Slideshow title="Exciting slideshow" contents={[]} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    });
});