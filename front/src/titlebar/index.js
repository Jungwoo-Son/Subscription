import React from 'react';

import giveStyleInterecter from '../utils/styleInterecter';

import './titlebar.css';


class TitleBar extends React.Component {
    
    render() {
        return giveStyleInterecter(this,
            <div className='title-bar'>
                <h1 className='title'>Subscriber</h1>
            </div>
        );
    }
}

export default TitleBar;