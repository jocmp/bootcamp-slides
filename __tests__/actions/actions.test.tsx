import { nextSlide, previousSlide } from '../../src/actions'

describe('navigation', () => {

    // (id: string, index: string, totalLength: number)
    it('returns next slide url', () => {
        const currentIndex: string = "0";
        const nextIndex: string = "1";
        const nextUrl: string = nextSlide("1", currentIndex, 3);

        expect(nextUrl).toMatch(nextIndex);
    });

    it('returns previous slide url', () => {
        const currentIndex: string = "1";
        const previousIndex: string = "0";
        const previousUrl: string = previousSlide("1", currentIndex, 3);

        expect(previousUrl).toMatch(previousIndex);
    });
});