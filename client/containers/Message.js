/**
 * Created by Jitender on 21/10/16.
 */

import React from 'react';
import {getCookie} from '../services/utilService';

class Message extends React.Component {

    constructor() {
        super()
        this.state = {
            token: ''
        }
    }

    componentDidMount() {
        var token = getCookie('token');
        this.setState({
            token: token
        })

    }

    render() {

        let {message} = this.props;
        let res = message.from.name.substring(0,2)+"..";
        let aligntext= '';
        if (this.state.token == message.from.id)
            aligntext = 'self';
        else
            aligntext = 'other';


        return (

                <li className={aligntext}>
                    <div className="avatar"><span><b> {res}</b></span></div>
                    <div className="msg">
                        <p> {message.text}</p>
                    </div>
                </li>


        )
    }
}

export default Message;