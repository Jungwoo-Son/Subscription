import React from 'react';

import giveStyleInterecter from '../utils/styleInterecter';

import './navbar.css';


class NavBar extends React.Component {
    render() {
        return giveStyleInterecter(this,
            <div className='navigation'>

            </div>
        );
    }
}


export default NavBar;