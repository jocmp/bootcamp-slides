import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Slideshow from '../components/Slideshow'
import { nextSlide, previousSlide, fetchSlideshow, viewSlide } from '../actions'
import { SlideshowDispatchProps, SlideshowOwnProps, SlideshowStateProps } from '../Props'
import { AppState } from '../Models'

const mapStateToProps = (state: AppState): SlideshowStateProps => ({
    slideshow: state.slideshow,
    viewedIndices: state.viewedIndices
});

const mapDispatchToProps = (dispatch: any): SlideshowDispatchProps => ({
    handleNextSlide: (id, index, length, history) => () => dispatch(nextSlide(id, index, length, history)),
    handlePreviousSlide: (id, index, length, history) => () => dispatch(previousSlide(id, index, length, history)),
    fetchSlideshow: (id, index) => dispatch(fetchSlideshow(id, index)),
    viewSlide: (index) => dispatch(viewSlide(index))
});

const SlideshowContainer = withRouter<any>(connect<SlideshowStateProps, SlideshowDispatchProps, SlideshowOwnProps>(
    mapStateToProps,
    mapDispatchToProps
)(Slideshow));

export default SlideshowContainer as any;