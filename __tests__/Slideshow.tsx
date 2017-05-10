import * as React from 'react'
import Slideshow from '../src/components/Slideshow'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('Slideshow', () => {
    it('renders', () => {
        const wrapper = shallow(<Slideshow title="Exciting slideshow" contents={[]} handleNextClick={jest.fn()} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    });

    it('responds to next click', () => {
        const nextListener = jest.fn();
        const wrapper = shallow(<Slideshow title="Exciting slideshow" contents={[]} handleNextClick={nextListener} />)
        wrapper.find('.next-button').simulate('click') // optionally: stubbed out text edit event
        expect(nextListener).toHaveBeenCalled()
    });
});