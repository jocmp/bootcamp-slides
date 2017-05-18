import * as React from 'react';
import '../stylesheets/Home.scss';
import { HomeProps } from '../Props';
import { LinkFactory } from '../Models';
import { Link } from 'react-router-dom';

class Home extends React.Component<HomeProps, { selectedSlideshowId: string, timer: any }> {

    constructor(props: HomeProps) {
        super(props);
        this.state = { selectedSlideshowId: '', timer: null };
        console.log(this.props.slideshow);
    }

    handleChange = (event: any) => {
        this.props.clearError();
        this.setState({ selectedSlideshowId: event.target.value })
        if (!!this.state.timer) {
            clearTimeout(this.state.timer);
        }
        if (!isNaN(Number(event.target.value))) {
            const searchValue = event.target.value;
            const timer = setTimeout((() => {
                this.props.searchSlideshows(Number(searchValue))
            }), 200);
            this.setState({ timer: timer });
        }
    }

    render() {
        return (
            <div className="home-container">
                <label>Slideshow ID</label>
                <input onChange={this.handleChange} value={this.state.selectedSlideshowId} type="text" />
                {this.props.slideshow.id > 0 &&
                    <Link className="slide-button" to={LinkFactory.createSlideshowLink(this.props.slideshow.id)}>
                        {this.props.slideshow.title}</Link>
                }
                {this.props.error.length > 0 && this.state.selectedSlideshowId &&
                    <span>No Slideshows Found.</span>
                }
            </div>
        )
    }
}

export default Home;