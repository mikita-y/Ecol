import React, { useState } from 'react';
import './Login.css'

export default function LoginForm(){

    const [credentials, setCredentials] = useState({login:"", password:""});

    const changing = (e) => {
        let object = { 
            ...credentials,
            [e.target.name]: e.target.value
        };
        setCredentials(object);
    }

    const send = (e) => {
        e.preventDefault();
        console.log("отправить " + credentials.login + " " + credentials.password)
    }

    return (
        <form className="login-form">
            <h3>Вход для администраторов</h3>

            <label className="warning">Внимание! Если вы не являетесь администаром, покиньте эту страницу!</label>

            <div className="form-group">
                <label>Login</label>
                <input 
                    type="text"
                    className="form-control" 
                    placeholder="Введите логин"
                    name="login"
                    value={credentials.login}
                    onChange={changing}
                />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input 
                    type="password" 
                    className="form-control" 
                    placeholder="Введите пароль" 
                    name="password"
                    value={credentials.password}
                    onChange={changing}
                />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            <button 
                type="submit" 
                className="btn btn-primary btn-block"
                onClick={send} >
                Submit
            </button>
            <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
            </p>
        </form>
    )
}