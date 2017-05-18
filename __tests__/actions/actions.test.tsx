import { nextSlide, previousSlide, loadSlideshowError } from '../../src/actions'

describe('navigation', () => {

    const history: any = {
        push: (url: string) => { }
    }

    // (id: string, index: string, totalLength: number)
    it('returns next slide url', () => {
        const currentIndex: string = "0";
        const nextIndex: number = 1;
        const action = nextSlide("1", currentIndex, 3, history);

        expect(action.index).toEqual(nextIndex);
    });

    it('returns previous slide url', () => {
        const currentIndex: string = "1";
        const previousIndex: number = 0;
        const action = previousSlide("1", currentIndex, 3, history);

        expect(action.index).toEqual(previousIndex);
    });

    it('returns error reason passed to it', () => {
        const error = "No Slideshow Found.";

        expect(loadSlideshowError(error).error).toEqual(error);
    });
});