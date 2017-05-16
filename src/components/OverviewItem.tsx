import * as React from 'react'
import { OverviewItemProps } from '../Props'
import '../stylesheets/Overview.scss'

const OverviewItem = (props: OverviewItemProps) => {
    return <li className="overview-item">{props.slide.title}</li>;
}

export default OverviewItem;