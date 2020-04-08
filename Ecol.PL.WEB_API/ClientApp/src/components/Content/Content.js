import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './Content.css'
import HomePage from './HomePage/HomePage'
import ErrorPage from './ErrorPage/ErrorPage'
import News from './News/News'
import Contacts from './Contacts/Contacts';
import Basket from './Basket/Basket'
import Price from './Price/Price'
import Production from './Production/Production';
import Login from './Login/Login'
import Error from './ErrorView/ErrorView'
import Loading from './Loading/Loading'

function Content () {
    return (
        <div className="pageContent">
            <Error />
            <Loading />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path='/news' component={News} />
                <Route path='/contacts' component={Contacts} />
                <Route path='/basket' component={Basket} />
                <Route path='/prices' component={Price} />
                <Route path='/product' component={Production} />
                <Route path='/login' component={Login} />
                <Route component={ErrorPage} />
            </Switch>        
        </div>
    )
};

export default Content;