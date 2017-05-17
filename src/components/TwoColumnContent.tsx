import * as React from 'react';
import { TwoColumnContentProps } from '../Props'

const TwoColumnContent = (props: TwoColumnContentProps) => (
    <div className="slide-column">
        {props.content}
    </div>
);

export default TwoColumnContent;