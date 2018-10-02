import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HTTPService from './services/http-service.js';
import Header from './component/header/header.js';
import MyNav from './component/mynav/mynav.js';
import MyCarasoul from './component/mycarousel/mycarousel.js';
import HomeBox from './component/homebox/homebox.js';
import Services from './component/services/services.js';
import Footer  from './component/footer/footer.js';
import Location from './component/location/location.js'
import AdminLogin from './component/admin-login/admin-login.js';
import People from './component/people/people.js';
import Appointments from './component/appointments/appointments.js';

const http = new HTTPService();


class App extends Component {
    
    constructor(props){
        super(props);
        this.loadData = this.loadData.bind(this);
        this.state = {doctors:[]};
        this.loadData();

        
    }
    
    loadData = () =>{
        var appRef = this; 
        http.getDoctors().then( data => {
        appRef.setState({doctors:data});
        console.log(appRef.state.doctors);
            
        }, err => {
            console.log('Got an error');
                               
                               });
        
    }
    
    
    render() {
        return (


            <div className="App">
            <AdminLogin/>

            <MyNav/>
            <MyCarasoul/>
            <HomeBox/>
            <Services/>
            <People/>
            <Appointments availibility="Monday" name="Khurshid" type="Bad" doctors={this.state.doctors}/>
            <Footer/>

            </div>
        );
    }
}

export default App;
