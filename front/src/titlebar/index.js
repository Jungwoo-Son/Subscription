import React from 'react';

import giveStyleReciever from '../utils/styleReciever';


import './titlebar.css';


class TitleBar extends React.Component {
    
    render() {
        return giveStyleReciever(this.props,
            <div className='title-bar'>
                <h1 className='title'>Subscriber</h1>
                
            </div>
        );
    }
}

export default TitleBar;