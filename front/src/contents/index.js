import React from 'react';
import giveStyleReciever from '../utils/styleReciever'


class Contents extends React.Component {
    render() {
      return giveStyleReciever(this.props, 
        <div className='content-container'></div>);
    }
}

export default Contents;