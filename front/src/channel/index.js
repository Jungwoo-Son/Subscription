import React from 'react'

import giveStyleReciever from '../utils/styleReciever';

import './channel.css';

class Channel extends React.Component {
    render() {
        return giveStyleReciever(this, 
                <>
                    <img className='channel-image'></img>
                    <span className='channel-name'>가나다라</span>
                </>
            );
    }
}

export default Channel;