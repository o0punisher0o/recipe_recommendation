// src/components/MainMenu.js
import React from 'react';
import { Link } from 'react-router-dom';

function MainMenu() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Главная</Link></li>
                <li><Link to="/recipes">Рецепты</Link></li>
                <li><Link to="/login">Вход</Link></li>
                <li><Link to="/register">Регистрация</Link></li>
            </ul>
        </nav>
    );
}

export default MainMenu;
