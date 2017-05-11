import * as Actions from '../../src/actions'
import { SlideshowProps } from '../../src/Props'
import { SlideshowModel, SlideModel } from '../../src/Models'

describe('actions', () => {

    const slide: SlideModel = {
        title: "Exciting Slide",
        slide_type: "title",
    }; 
    
    const show: SlideshowModel = {
        id: 1,
        title: "Exciting Presentation",
        slides: [ slide, slide, slide ]
    };

    const props: SlideshowProps = {
        currentIndex: 0,
        slideshow: show, 
        handleNextClick: jest.fn()
    }

    it('increments value of next slide', () => {
        const nextProps = Actions.nextSlide(props);
        expect(nextProps.currentIndex).toEqual(1);
    });

    it('does not increment if at last index', () => {
        const lastIndex = props.slideshow.slides.length - 1;

        const lastIndexProps: SlideshowProps = {
            ...props,
            currentIndex: lastIndex,
        }
        const nextProps = Actions.nextSlide(lastIndexProps);

        expect(nextProps.currentIndex).toEqual(lastIndex)
    });
});
