import React from 'react';
import {Switch, Route} from 'react-router-dom'
import NewsPage from './ArticleList/ArticleList'
import ArticlePage from './ArticlePage/ArticlePage'

export default function News () {
    return (
        <Switch>
            <Route exact path='/news' component={NewsPage} />
            <Route path='/news/:id' component={ArticlePage} />
        </Switch>
    )
};