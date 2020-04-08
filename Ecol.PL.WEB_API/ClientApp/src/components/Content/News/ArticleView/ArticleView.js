import React from 'react';
import { Link } from 'react-router-dom'
import getDate from '../../../../common/date'
import './ArticleView.css'

export default function ArticleView({ article }) {

    return (
        <div className="articleVievContainer">
        <Link to={`/news/${article.id}`}>
            <div className="articleView">
                <h6>{article.title}</h6>
                {article.photoUrl &&
                    <img src={article.photoUrl} alt="image"/>
                }
                <p>{getDate(article.creationDate)}</p>
            </div>    
        </Link>
        </div>
    );
}