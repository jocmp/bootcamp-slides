import * as Actions from '../../src/actions'

describe('actions', () => {

    it('increments value of next slide', () => {
        const currentIndex: number = 0;
        const totalLength: number = 4;

        const action = Actions.nextSlide(currentIndex, totalLength);
        
        expect(action.currentIndex).toEqual(1);
    });

    it('increments value of next slide', () => {
        const currentIndex: number = 2;
        const totalLength: number = 4;

        const action = Actions.nextSlide(currentIndex, totalLength);
        
        expect(action.currentIndex).toEqual(3);
    });
    
    it('does not increment if at last index', () => {
        const currentIndex: number = 3;
        const totalLength: number = 4;

        const action = Actions.nextSlide(currentIndex, totalLength);

        expect(action.currentIndex).toEqual(currentIndex)
    });
});
