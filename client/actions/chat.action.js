/**
 * Created by Jitender on 21/10/16.
 */

import {MESSAGE_RECEIVED, MESSAGE_SENT, MESSAGES_LOADED, TYPING, STOP_TYPING} from '../constants';
import axios from 'axios';
import {socket} from '../socket';

export function loadMessages(userName, userId) {
    return (dispatch) => {
        axios({
            method: 'get',
            url: '/api/chat'
        }).then((response) => {
            dispatch(messagesLoaded(userName, userId, response.data));
        })
    }
}

export default function messagesLoaded (userName, userId, messages) {
    console.log("messages loaded----------")
    return {
        type : MESSAGES_LOADED,
        state : {
            user : {
                userName : userName,
                userId : userId
            },
            messages : messages
        }
    }
}

export function sendMessage(message, user) {
    return (dispatch) => {
        axios({
            method: 'post',
            url: '/api/chat',
            data : {
                text : message,
                from : user
            }
        }).then((response) => {
            socket.emit('chat', {text : message, from : user, time : response.data.time});
            dispatch(messageReceived({text : message, from : user, time : response.data.time}))
        })
    }
}

export function messageReceived (message) {
    return {
        type: MESSAGE_RECEIVED,
        message
    }
}

export function typing (userName) {
    return {
        type: TYPING,
        userName
    }
}

export function stopTyping () {
    return {
        type: STOP_TYPING
    }
}









