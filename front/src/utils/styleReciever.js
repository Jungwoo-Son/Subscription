import React from 'react';

import './styleReciever.css';

function giveStyleInterecter_(children) {
    const class_name = this.props.className;
    console.log(class_name);
    return (
        <div className={'style-reciever '+(class_name?class_name:'')} id={this.props.id}>
            {children}
        </div>
    );
}
const giveStyleReciever = (that, children)=>giveStyleInterecter_.bind(that, children)();
export default giveStyleReciever;