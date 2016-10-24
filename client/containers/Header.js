/**
 * Created by Jitender on 24/10/16.
 */

import React from 'react';
import Button from '../components/Button';

class Header extends React.Component {

    render() {

        let {clickHandler, spanText , className} = this.props;
        
        return (


            <div className="menu">
            <div className="back"><i class="fa fa-chevron-left"></i> <img src="http://i.imgur.com/DY6gND0.png" draggable="false" /></div>
            <div className="name">{spanText}</div>
            <Button className="floatRight" onClick={clickHandler} value="Exit" />
            </div>
            
        );

    }
}

export default Header;


