/**
 * Created by Jitender on 23/10/16.
 */

import React from 'react';

class Button extends React.Component {

    render() {

        let {value, onClick, className } = this.props;

        return (
            <button onClick={onClick}  className={className}>{value}</button>
        );

    }
}

export default Button;

