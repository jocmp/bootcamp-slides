import * as React from 'react'
import TitleSlide from './TitleSlide'
import SimpleSlide from './SimpleSlide'
import { SlideModel } from '../Models'
import '../../public/stylesheets/Overview.css'

const OverviewItem = (props: any) => {
    return <li className="overview-item">{props.slide.title}</li>;
}

export default OverviewItem;