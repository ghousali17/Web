import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/header/header.js';
import MyNav from './component/mynav/mynav.js';
import MyCarasoul from './component/mycarousel/mycarousel.js';
import HomeBox from './component/homebox/homebox.js';


class App extends Component {
    render() {
        return (


            <div className="App">
            <Header/>
            <MyNav/>
            <MyCarasoul/>
            <HomeBox/>
            </div>
        );
    }
}

export default App;
