export const nextSlide = (index: number = 0, totalLength: number) => ({
    type: 'SET_NEXT_SLIDE',
    currentIndex: index < totalLength - 1 ? index + 1 : index
});