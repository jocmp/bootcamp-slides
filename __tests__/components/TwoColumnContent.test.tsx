import * as React from 'react'
import TwoColumnContent from '../../src/components/TwoColumnContent'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('Two-Column Content', () => {

    it('renders', () => {
        const wrapper = shallow(<TwoColumnContent content={"Test content"} />)
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('displays a picture', () => {
        const wrapper = shallow(<TwoColumnContent content={"https://example.com/image.jpg"} />)
        expect(wrapper.find('img')).toHaveLength(1);
    });

    it('displays text', () => {
        const wrapper = shallow(<TwoColumnContent content={'Plain old vanilla text'} />);
        expect(wrapper.find('p')).toHaveLength(1);
    });
});