import * as React from 'react';
import '../stylesheets/Home.scss';
import { HomeProps } from '../Props';
import { LinkFactory } from '../Models';
import { Link } from 'react-router-dom';

const logo = require('../assets/wordmark.png');

class Home extends React.Component<HomeProps, { selectedSlideshowId: string }> {

    constructor(props: HomeProps) {
        super(props);
        this.state = { selectedSlideshowId: '' };
        console.log(this.props.slideshow);
    }

    isValidSlideshow = () => {
        return this.props.slideshow.id > 0;
    }

    titleLine = () => {
        if (this.isValidSlideshow()) {
            return `View ${this.props.slideshow.title}`
        }
        return ''
    }

    handleChange = (event: any) => {
        this.props.clearError();
        this.setState({ selectedSlideshowId: event.target.value })
        if (event.target.value.length > 0 && !isNaN(Number(event.target.value))) {
            const searchValue = event.target.value;
            this.props.searchSlideshows(Number(searchValue))
        }
    }

    render() {
        return (
            <div className="home-container">
                <div className="search-header">
                    <a href={LinkFactory.getAtomicObject()}>
                        <img src={logo} className="search-logo" alt="logo" />
                    </a>
                    <input placeholder="Search Slideshow IDs" onChange={this.handleChange} value={this.state.selectedSlideshowId} type="text" />
                </div>
                <Link className={this.isValidSlideshow() ? "slide-button" : "button-invisible"}
                    to={LinkFactory.createSlideshowLink(this.props.slideshow.id)}>
                    {this.titleLine()}
                </Link>
                {this.props.error.length > 0 && this.state.selectedSlideshowId &&
                    <span className="slide-error">No Slideshows Found.</span>
                }
            </div>
        )
    }
}

export default Home;