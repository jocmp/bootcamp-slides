import * as React from 'react'
import TitleSlide from './TitleSlide'
import SimpleSlide from './SimpleSlide'
import { SlideModel } from '../Models'
import { OverviewItemProps } from '../Props'
import '../stylesheets/Overview.scss'

const OverviewItem = (props: OverviewItemProps) => {
    return <li className="overview-item">{props.slide.title}</li>;
}

export default OverviewItem;