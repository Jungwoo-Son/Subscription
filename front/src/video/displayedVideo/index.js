import React from 'react';

import './displayedVideo.css';

class DisplayedVideo extends React.Component {
    render () {
        console.log(this.props.src);
        return (
            <div className='displayed-video'>
                <img src={this.props.src} alt='' className='thumbnail-img'/>
                <span className='title-of-video'>lorem</span>
            </div>
        );
    }

}

export default DisplayedVideo;
