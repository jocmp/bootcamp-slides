import * as React from 'react'
import { OverviewItemProps } from '../Props'
import '../stylesheets/Overview.scss'
import { Link } from 'react-router-dom'

const OverviewItem = (props: OverviewItemProps) => {
    return (
        <li className={props.viewed ? "overview-item-viewed" : "overview-item"}>
            <Link onClick={() => props.viewSlide(props.index)} to={`/slideshows/${props.slideshow_id}/slides/${props.index}`}>
                {props.slide.title}
            </Link>
        </li>
    );
}

export default OverviewItem;