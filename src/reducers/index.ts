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

const initialSlideshow: any = { title: "", id: -1, slides: [] };

const slideshow = (state: AppState, action: any) => {
    switch (action.type) {
        case 'LOAD_SLIDESHOW':
            return action.slideshow;
        case 'LOAD_SLIDESHOW_ERROR':
            return initialSlideshow;
        case 'VIEW_SLIDE':
        default:
            if (!!state) {
                return state;
            }
            return initialSlideshow;
    }
}

const fetchSlideshow = (state: AppState, action: any) => {
    switch (action.type) {
        case 'FETCH_SLIDESHOW':
            return action.loading;
        default:
            return false;
    }
}

const error = (state: AppState, action: any) => {
    switch (action.type) {
        case 'LOAD_SLIDESHOW_ERROR':
            return action.error;
        default:
            return '';
    }
}

const rootReducer = combineReducers({
    slideshow,
    viewedIndices,
    fetchSlideshow,
    error
});

export default rootReducer;