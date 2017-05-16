import { combineReducers } from 'redux'
import { AppState } from '../Models'

const viewedIndices = (state: number[] = [], action: any) => {
    switch (action.type) {
        case 'VIEW_SLIDE':
            return Array.from(new Set([...state, action.index]));
        default:
            return state;
    }
};

const slideshow = (state: AppState, action: any) => {
    switch (action.type) {
        case 'LOAD_SLIDESHOW':
            return action.slideshow;
        case 'VIEW_SLIDE':
        default:
            if (!!state) {
                return state;
            }
            return { title: "", id: 0, slides: [] };
    }
}

const rootReducer = combineReducers({
    slideshow,
    viewedIndices
});

export default rootReducer;