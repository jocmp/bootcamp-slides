import { combineReducers } from 'redux'
// import { AppState} from '../Models'

const slideshow = (state: any, action: any)=> {
  switch(action.type) {
    case 'LOAD_SLIDESHOW':
        return action.slideshow
    default:
        return { slides: [] }
  }
}

const rootReducer = combineReducers({
    slideshow
});

export default rootReducer;