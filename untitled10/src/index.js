import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home.jsx'
import './styles/global.css'
import Header from "./components/Header/Header";
import AddTodo from "./components/AddTodo/AddTodo";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

