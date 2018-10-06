import React, { Component } from 'react';
import './appointments.css';

class Appointment extends Component{
    constructor(props){
        super(props);
        this.doctorList = this.doctorList.bind(this);
        this.doctAvailibility = this.doctAvailibility.bind(this);
        this.rowColor = this.rowColor.bind(this);
    }
    doctAvailibility = (doctor) =>{
        if(doctor.availibility == "yes")
            return ( <div><a href="#" data-toggle="modal" data-target=".bd-example-modal-lg">Make appointment</a></div>);
        else
            return ( <div className="col-red"><a href="#">Appointment Unavailable</a></div>);


    }
    rowColor = (count) =>{
        if(count%2==0)
            return "row-entry row row-white";
        else 
            return "row-entry row row-gray";

    }
    doctorList = () =>{
        var count = 1;
        console.log('Got data');
        console.log(this.props.doctors);
        var list = [];
        for( var x = 0; x < this.props.doctors.length; x++)
        {


            list.push(<div className="col-sm-3">
                    <div class="card" >
                        <div class="card-body">
                            <h5 class="card-title">Dr. {this.props.doctors[x].name}</h5>
                            <h6 class="card-subtitle text-muted">{this.props.doctors[x].type}</h6>
                            <div class="row">{this.props.doctors[x].days.map(day => <div className="days-doctor col-sm-4">{day}</div> )}</div>
                            <p class="card-text"> {this.doctAvailibility(this.props.doctors[x])}</p>
                        </div>
                    </div>
                </div>
            );


        }

        return (list); 
    }
    render(){

        return(
            <div className="container-appoint" id="appointment">
                <div className="heading-main" id="doctors">Make Your Appointment</div>
                <div className="box-appoint">
                    <div className="row row-appointment">
                         {this.doctorList()}
                    </div>   
                    



                </div>




            </div>
        

        );
    }







}

export default Appointment;