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
            <Home searchSlideshows={searcher} loading={loading} error={error} slideshow={slideshow} />
        );
    };

    it('renders', () => {
        expect(toJson(getWrapper(defaultSlideshow))).toMatchSnapshot();
    });

    it('shows errors when present', () => {
        const message = 'No Slideshows Found.';
        expect(getWrapper(defaultSlideshow, false, message).text()).toContain(message);
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
});