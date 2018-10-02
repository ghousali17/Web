import React, { Component } from 'react';
import './appointments.css';

class Appointment extends Component{
    constructor(props){
        super(props);
        this.doctorList = this.doctorList.bind(this);
        this.doctAvailibility = this.doctAvailibility.bind(this);

    }
    doctAvailibility = (doctor) =>{
        if(doctor.availibility == "yes")
            return ( <div className="col-sm-2">Make appointment</div>);
        else
            return ( <div className="col-sm-2 appoint-unavail">Appointment Unavailable</div>);
        
        
    }
    doctorList = () =>{
        var count = 1;
        console.log('Got data');
        console.log(this.props.doctors);
        
        const list=this.props.doctors.map(doctor => 
                                          <div className="row-entry row">
                                              <div className="col-sm-1">{count++}</div>
                                              <div className="col-sm-2">{doctor.name}</div>
                                              <div className="col-sm-2">{doctor.type}</div>
                                              <div className="col-sm-5">{doctor.days.map(day => <div className="days-doctor">{day}</div> )}</div>
                                              {this.doctAvailibility(doctor)}
                                          </div>                                   
                                         );
                                          return (list); 
    }
    render(){

        return(
            <div className="container-appoint" id="appointment">
                <div className="box-appoint">
                    <div className="row row-heading">
                        <div className="col-sm-1">#</div>
                        <div className="col-sm-2">Name</div>
                        <div className="col-sm-2">Specialization</div>
                        <div className="col-sm-5">Days</div>
                        <div className="col-sm-2"></div>
                    </div>   

                    {this.doctorList()}


                </div>




            </div>

        );
    }







}

export default Appointment;