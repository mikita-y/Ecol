import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { getRequest } from '../../../../requests/articleRequests'
import getDate from '../../../../common/date'
import "./ArticlePage.css"

function ArticlePage({ match, getArticleRequest}) {

  const [article, setArticle] = useState(null);

  useEffect(() => {
    getArticleRequest(match.params.id, setArticle);
  }, [])

  return article && (
    <div className="articlePage">
      <h1>{article.title}</h1>
      {article.photoUrl &&
        <img src={article.photoUrl} alt="image"/>
      }
      <p>{article.text}</p>
      <p>{getDate(article.creationDate)}</p>
   </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    getArticleRequest:(id, setArticle) => dispatch(getRequest(id, setArticle))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(ArticlePage)