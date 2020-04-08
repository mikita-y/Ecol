import React, { useState } from 'react';
import UserMessageForm from './UserMessageForm'
import './UserMessage.css'

export default function UserMessage(){

    const [toggle, changeToggle] = useState(false);

    return (
        <div className="user-message">
            {toggle && <UserMessageForm />}
            <button  
                type="submit" 
                className="btn btn-primary btn-circle"
                onClick={() => changeToggle(!toggle)} >
                
            </button>
        </div>
    )
}