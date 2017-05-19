import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Home from '../components/Home';
import { fetchSlideshow, clearError } from '../actions';
import { AppState } from '../Models';
import { HomeStateProps, HomeDispatchProps } from '../Props';

const mapStateToProps = (state: AppState): HomeStateProps => ({
    slideshow: state.slideshow,
    error: state.error,
    loading: state.loading
});

const mapDispatchToProps = (dispatch: any): HomeDispatchProps => ({
    searchSlideshows: (id) => dispatch(fetchSlideshow(id)),
    clearError: () => dispatch(clearError())
});

const HomeContainer = withRouter<any>(connect<HomeStateProps, HomeDispatchProps, {}>(
    mapStateToProps,
    mapDispatchToProps
)(Home));

export default HomeContainer as any;