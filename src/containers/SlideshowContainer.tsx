import { connect } from 'react-redux'
import Slideshow from '../components/Slideshow'
import { nextSlide, fetchSlideshow } from '../actions'
import { SlideshowDispatchProps, SlideshowOwnProps, SlideshowStateProps } from '../Props'
import { store } from '../index'

const mapStateToProps = (state: any): SlideshowStateProps => {
    return {
        slideshow: state.slideshow,
    }
};

const mapDispatchToProps = (dispatch: any): SlideshowDispatchProps => ({
    handleNextClick: nextSlide,
    fetchSlideshow: (id) => dispatch(fetchSlideshow(id))
});

const SlideshowContainer = connect<SlideshowStateProps, SlideshowDispatchProps, SlideshowOwnProps>(
    mapStateToProps,
    mapDispatchToProps
)(Slideshow);

export default SlideshowContainer as any;