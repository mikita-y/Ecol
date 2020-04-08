import React from 'react';
import { Link } from 'react-router-dom'
import './NavBar.css'

function NavBar () {
    return (
        <nav id="navBar">
            <ul>
                <li><Link to='/'><img src='/images/icons/home-icon.png' alt='Главная'/></Link></li>
                <li><Link to='/product'>Продукция</Link></li>
                <li><Link to='/prices'>Прайс-лист</Link></li>
                <li><Link to='/news'>Новости</Link></li>
                <li><Link to='/contacts'>Контакты</Link></li>
                <li><Link to='/basket'><img src='/images/icons/basket-icon.png' alt='Корзина'/></Link></li>
            </ul>
        </nav>
    )
};

export default NavBar;