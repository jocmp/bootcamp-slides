import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Home from '../components/Home';
import { fetchSlideshow } from '../actions';
import { AppState } from '../Models';
import { HomeStateProps, HomeDispatchProps } from '../Props';

const mapStateToProps = (state: AppState): HomeStateProps => ({
    slideshow: state.slideshow,
    error: state.error
});

const mapDispatchToProps = (dispatch: any): HomeDispatchProps => ({
    searchSlideshows: (id) => dispatch(fetchSlideshow(id))
});

const HomeContainer = withRouter<any>(connect<HomeStateProps, HomeDispatchProps, {}>(
    mapStateToProps,
    mapDispatchToProps
)(Home));

export default HomeContainer as any;