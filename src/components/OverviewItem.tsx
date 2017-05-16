import * as React from 'react'
import { OverviewItemProps } from '../Props'
import '../stylesheets/Overview.scss'

const OverviewItem = (props: OverviewItemProps) => {
    return (
        <li className={props.viewed ? "overview-item-viewed" : "overview-item"}>{props.slide.title}</li>
    );
}

export default OverviewItem;