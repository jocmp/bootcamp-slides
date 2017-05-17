import * as React from 'react';

const Home = (props: any) => (
    <div>
        <code>Hello world from {props.match.params.message}</code>
    </div>
);

export default Home;