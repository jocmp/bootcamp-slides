import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Slideshow from '../components/Slideshow'
import { nextSlide, previousSlide, fetchSlideshow } from '../actions'
import { SlideshowDispatchProps, SlideshowOwnProps, SlideshowStateProps } from '../Props'
import { AppState } from '../Models'

const mapStateToProps = (state: AppState): SlideshowStateProps => {
    return {
        slideshow: state.slideshow,
    }
};

const mapDispatchToProps = (dispatch: any): SlideshowDispatchProps => ({
    handleNextSlide: (id, index, length, history) => () => history.push(nextSlide(id, index, length)),
    handlePreviousSlide: (id, index, length, history) => () => history.push(previousSlide(id, index, length)),
    fetchSlideshow: (id) => dispatch(fetchSlideshow(id))
});

const SlideshowContainer = withRouter<any>(connect<SlideshowStateProps, SlideshowDispatchProps, SlideshowOwnProps>(
    mapStateToProps,
    mapDispatchToProps
)(Slideshow));

export default SlideshowContainer as any;