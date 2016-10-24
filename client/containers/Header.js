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

            <div className="name">{"Hi "}{spanText}</div>
            <Button className="floatRightBtn" onClick={clickHandler} value="Exit" />
            </div>
            
        );

    }
}

export default Header;


