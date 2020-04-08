import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as basketActions from '../store/basketReducer'

import './MainPage.css'
import Header from './Header/Header'
import NavBar from './NavBar/NavBar'
import Content from './Content/Content'
import Footer from './Footer/Footer'
import UserMessage from './UserMessage/UserMessage'

function MainPage({ checkBasket, saveBasket }) {
  
  useEffect(() => {
    checkBasket();
    window.addEventListener('beforeunload', saveBasket);
      // Указываем, как сбросить этот эффект:
    return () => window.removeEventListener('beforeunload', saveBasket);
  });

  return (
    <div id="mainPage">
      <Header />
      <NavBar />
      <Content />
      <UserMessage />
      <Footer />
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    ...basketActions
  },
  dispatch)
}

export default connect(
  null,
  mapDispatchToProps
)(MainPage)