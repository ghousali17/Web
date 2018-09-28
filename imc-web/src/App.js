import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HTTPService from './services/services.js';
import Header from './component/header/header.js';
import MyNav from './component/mynav/mynav.js';
import MyCarasoul from './component/mycarousel/mycarousel.js';
import HomeBox from './component/homebox/homebox.js';
import Services from './component/services/services.js';
import Footer  from './component/footer/footer.js';
import Location from './component/location/location.js'
import AdminLogin from './component/admin-login/admin-login.js';
import People from './component/people/people.js';

const http = new HTTPService();


class App extends Component {
    render() {
        return (


            <div className="App">
            <AdminLogin/>

            <MyNav/>
            <MyCarasoul/>
            <HomeBox/>
            <Services/>
            <People/>

            <Footer/>

            </div>
        );
    }
}

export default App;
