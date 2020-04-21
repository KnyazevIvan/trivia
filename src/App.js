import React from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { Menu } from './components/menu/Menu';
import { BrowserRouter, Route } from 'react-router-dom';
import ThemeContainer from './components/theme/ThemeContainer';

function App() {
  return (
    <BrowserRouter>
 
    <div className="app">
        <Header/>
      <Route exact path='/'  render= {()=> <Menu/>}/>
      <Route exact path='/theme/:id' component={ThemeContainer}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
