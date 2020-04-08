import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { getListRequest } from '../../../../requests/articleRequests'
import ArticleView from '../ArticleView/ArticleView'
import './ArticleList.css'

function ArticleList({ getArticleListRequest }) {

  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    getArticleListRequest(setArticleList);
  }, [])

  return (
    <div className="articleList">
      <h3>Ecol новости</h3>
      {articleList.map(element =>
        <ArticleView article={element} key={element.id.toString()}/>)}
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    getArticleListRequest:(setArticle) => dispatch(getListRequest(setArticle))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(ArticleList)
