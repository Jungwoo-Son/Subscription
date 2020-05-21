import React from 'react';


function giveStyleInterecter_(children) {
    let class_name = this.props.className;
    return (
        <div className={'style-interecter '+class_name?class_name:''} id={this.props.id}>
            {children}
        </div>
    );
}
const giveStyleInterecter = (that, children)=>giveStyleInterecter_.bind(that, children)();
export default giveStyleInterecter;