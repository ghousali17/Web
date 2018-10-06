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
import AppointmentsForm from './component/appointments/appointments-form.js';
import Donation from './component/donation/donation.js';
const http = new HTTPService();


class App extends Component {

    constructor(props){
        super(props);
        this.loadData = this.loadData.bind(this);
        this.adminLogin = this.adminLogin.bind(this);
        this.state = {doctors:[]};
        this.loadData();
        //     this.adminLogin("Ghous","123");


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

    adminLogin = (userId,password) =>{
        http.userLogin(userId,password).then( response =>{
            console.log(response);
        }
                                            );    

    }


    render() {
        return (


            <div className="App">
                <AdminLogin/>

                <MyNav/>
                <MyCarasoul/>
                <HomeBox/>

                <Services/>
                <Donation/>
                <People/>
                <Appointments doctors={this.state.doctors}/>
                <AppointmentsForm doctors={this.state.doctors}/>
                <Location/>
                <Footer/>

            </div>
        );
    }
}

export default App;
