import * as React from 'react'
import TwoColumnContent from '../../src/components/TwoColumnContent'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('Two-Column Content', () => {

    it('renders', () => {
        const wrapper = shallow(<TwoColumnContent content={"Test content"} />)
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});