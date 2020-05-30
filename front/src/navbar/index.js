import React from 'react';

import giveStyleReciever from '../utils/styleReciever';

import Channel from '../channel' 

import './navbar.css';


class NavBar extends React.Component {
    render() {
        return giveStyleReciever(this,
            <div className='navigation'>
                <ul className='channel-list'>
                    <li><Channel className='channel'/></li>
                    <li><Channel className='channel'/></li>
                    <li><Channel className='channel'/></li>
                    <li><Channel className='channel'/></li>
                </ul>
            </div>
        );
    }
}


export default NavBar;