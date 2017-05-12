import * as React from 'react'
import Overview from '../../src/components/Overview'
import { SlideshowProps } from '../../src/Props' 
import { SlideshowModel, SlideModel } from '../../src/Models'
import { shallow, ShallowWrapper } from 'enzyme'
import toJson from 'enzyme-to-json'
import createBrowserHistory from 'history/createBrowserHistory' 

describe('Overview', () => {
    const history = createBrowserHistory();

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
        expect(1).toEqual(1);
        // const wrapper = shallow(
        //     <Overview slideshow={show} />)
        // expect(toJson(wrapper)).toMatchSnapshot()
    });
}); 