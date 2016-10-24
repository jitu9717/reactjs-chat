/**
 * Created by Jitender on 24/10/16.
 */

import React from 'react';
import Message from './Message';

class MessageList extends React.Component {
    
    render() {
        let {messages, className} = this.props;

        return (
            <ol className="chat">

                {messages.map(
                    function (message, i) {
                        return <Message message={message} key={i}/>
                    }
                )}
            </ol>

        );

    }
}

export default MessageList;

