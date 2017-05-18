import * as React from 'react';
import Home from '../../src/components/Home';
import { SlideshowModel } from '../../src/Models';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('Home', () => {

    const defaultSlideshow: SlideshowModel = { title: 'Slideshow', id: 1, slides: [] };

    const getWrapper = (slideshow: SlideshowModel, loading: boolean = false, error: string = '',
        searcher: (event: any) => void = jest.fn()) => {
        return shallow(
            <Home clearError={jest.fn()} searchSlideshows={searcher} loading={loading} error={error} slideshow={slideshow} />
        );
    };

    it('renders', () => {
        expect(toJson(getWrapper(defaultSlideshow))).toMatchSnapshot();
    });

    it('shows a button for the slideshow', () => {
        expect(getWrapper(defaultSlideshow).find('.slide-button')).toHaveLength(1);
    });

    it('calls search on text change', () => {
        const searcher = jest.fn();
        const wrapper = getWrapper(defaultSlideshow, false, '', searcher);
        wrapper.find('input').simulate('keyDown', { keyCode: 49 });
        setTimeout(() =>
            expect(searcher).toHaveBeenCalled(),
            200);
    });


    const message = 'No Slideshows Found.';

    it('shows errors when present', () => {
        const wrapper = getWrapper(defaultSlideshow, false, message);
        wrapper.setState({ selectedSlideshowId: '2009' })
        expect(wrapper.text()).toContain(message);
    });

    it('hides current errors for empty text', () => {
        const wrapper = getWrapper(defaultSlideshow, false, message);
        expect(wrapper.text()).not.toContain(message);
    });
});