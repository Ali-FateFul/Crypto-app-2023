import React from 'react';

// Gif
import spinner from '../gif/spinner.gif';

const Loading = () => {
    return (
        <div>
            <img src={spinner} alt="loading" />
            <h3>Loading ...</h3>
        </div>
    );
};

export default Loading;