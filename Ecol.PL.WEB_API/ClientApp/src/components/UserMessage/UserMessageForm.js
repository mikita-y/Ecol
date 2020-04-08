import React, { useState } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createRequest } from '../../requests/messageRequests'
import './UserMessageForm.css'

function UserMessageForm({ createRequest }){

    const [message, setMessage] = useState({userEmail:"", text:"", title: ""});

    const changing = (e) => {
        let object = { 
            ...message,
            [e.target.name]: e.target.value
        };
        setMessage(object);
    }

    const send = (e) => {
        e.preventDefault();
        createRequest(message);
    }

    return (
        <form className="user-message-form">
            <h3>Вы можете задать нам вопрос</h3>

            <div className="form-group">
                <label>E-mail</label>
                <input 
                    type="email"
                    className="form-control" 
                    placeholder="Введите ваш E-mail"
                    name="userEmail"
                    value={message.userEmail}
                    onChange={changing}
                />
            </div>

            <div className="form-group">
                <label>Тема</label>
                <input 
                    type="text"
                    className="form-control" 
                    placeholder="Тема письма"
                    name="title"
                    value={message.title}
                    onChange={changing}
                />
            </div>

            <div className="form-group">
                <label>Вопрос</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Введите ваш вопрос" 
                    name="text"
                    value={message.text}
                    onChange={changing}
                />
            </div>

            <button 
                type="submit" 
                className="btn btn-primary btn-block"
                onClick={send} >
                Отправить
            </button>
        </form>
    )
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        createRequest
    },
    dispatch)
}

export default connect(
    null,
    mapDispatchToProps
)(UserMessageForm)