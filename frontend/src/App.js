// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainMenu from './components/MainMenu';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

function App() {
    return (
        <Router>
            <div className="App">
                <MainMenu />  {/* Главное меню, доступное на всех страницах */}
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/recipes" element={<RecipeList />} />
                    <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
