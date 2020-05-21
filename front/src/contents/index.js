import React from 'react';
import giveStyleInterecter from '../utils/styleInterecter'


class Contents extends React.Component {
    render() {
      return giveStyleInterecter(this, 
        <div className='content-container'></div>);
    }
}

export default Contents;