import * as React from 'react';
import { TwoColumnContentProps } from '../Props'

const URL_MATCHER = new RegExp('(https?|ftp):\/\/[^\s/$.?#].[^\s]*');

const isLink = (content: string): boolean => {
    return URL_MATCHER.test(content);
};

const getContent = (content: string) => {
    if (isLink(content)) {
        return <img src={content} />
    }
    return <p>{content}</p>
}

const TwoColumnContent = (props: TwoColumnContentProps) => (
    <div className="slide-column">
        {getContent(props.content)}
    </div>
);

export default TwoColumnContent;