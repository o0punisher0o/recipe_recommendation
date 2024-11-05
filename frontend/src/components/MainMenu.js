// src/components/MainMenu.js
import React from 'react';
import { Link } from 'react-router-dom';

function MainMenu() {
    return (
        <nav className="navbar">
            <Link to="/">Главная</Link>
            <Link to="/recipes">Рецепты</Link>
            <Link to="/login">Вход</Link>
            <Link to="/register">Регистрация</Link>
        </nav>
    );
}

export default MainMenu;
