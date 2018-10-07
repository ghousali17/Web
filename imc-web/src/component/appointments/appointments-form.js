import React, { Component } from 'react';
import './appointments-form.css';
import HTTPService from '../../services/http-service.js';
import IMG1 from './checkmark.png'
const http = new HTTPService();


class AppointmentForm extends Component{
    constructor(props){
        super(props);
        this.doctorList = this.doctorList.bind(this);
        this.doctorDetail = this.doctorDetail.bind(this);
        this.submitAppointment= this.submitAppointment.bind(this);
    }
    doctorList = () =>{
        var count = 0;
        console.log(this.props.doctors);
        var list =[];
        list.push(<option value="Choose A Specialist" selected>Choose A Specialist</option>);
        for(var x = 0; x < this.props.doctors.length; x++)
        {  
            if(this.props.doctors[x].availibility != "no")
            {   
                list.push(<option value={this.props.doctors[x].name}>{this.props.doctors[x].name}</option>);
            }

        }


        return (list); 
    }
    doctorDetail = () =>{
        var doctorState = document.getElementById('doctorState');
        var name_param = doctorState.options[doctorState.selectedIndex].value;  
        var displayDetails = document.getElementById('doctor-details');
        var displayDays = document.getElementById('doctor-details-days');

        if(name_param== "Choose A Specialist")
        {   displayDetails.className = "row row-details";
         displayDays.className ="row row-details";
         return; 
        }


        var count = -1;
        for(var x = 0; x < this.props.doctors.length; x++ )
        { 
            if(name_param == this.props.doctors[x].name)
            {
                count = x; 
            }
        }
        if(count == -1)
            return; 
        var displayDetails = document.getElementById('doctor-details');
        var displayDays = document.getElementById('doctor-details-days')
        displayDetails.className = "row row-details-visible";
        displayDays.className ="row row-details-visible";
        var name = document.getElementById('doctor-name');
        var type = document.getElementById('doctor-type');
        var days = document.getElementById('dayState');
        days.innerHTML = "";

        name.innerText = "Dr. " + this.props.doctors[count].name;
        type.innerText = this.props.doctors[count].type;
        for(var x = 0; x < this.props.doctors[count].days.length; x++)
        {   
            days.innerHTML += "<option>" + this.props.doctors[count].days[x] + "</option>"; 
        }




    }

    submitAppointment = () =>{
        var doctorState = document.getElementById('doctorState');
        var doctorSelectionState = doctorState.options[doctorState.selectedIndex].value;  
        var doctorName = document.getElementById('doctor-name').innerText;
        if(doctorName == "" || !doctorName || doctorSelectionState == "Choose A Specialist" )
        {
            var status = document.getElementById('status-appointment');
            status.className ="status-login status-error";
            status.innerText = "Please select a specialist!";


            return; 
        }
        var address1 = document.getElementById('address1');
        var address2 = document.getElementById('address2');
        var city = document.getElementById('city');

        var branchState = document.getElementById('branchState');
        var dayState = document.getElementById('dayState');


        const name = document.getElementById('name').value;
        const contact = document.getElementById('contact').value;
        const address = address1.value.toString() + " " + address2.value.toString() + " " + city.value.toString();
        const branch = branchState.options[branchState.selectedIndex].value.toString();
        const doctorname = doctorName.substring(4);
        const day = dayState.options[dayState.selectedIndex].value.toString();
        const formData = {
            doctorname: doctorname, 
            name: name,
            contact: contact,
            address: address,
            day: day,
            branch: branch,
        };

        http.makeAppointment(formData).then(response =>{
            var status = document.getElementById('status-appointment');
            var formWait = document.getElementById('form-status-await');
            var formWait1 = document.getElementById('form-status-await-1');
            var formWait2 = document.getElementById('form-status-await-2');
            var formResponse = document.getElementById('form-response');
            var formResponseTxt = document.getElementById('form-response-txt');
            if(response.status == "incomplete")
            {    
                status.className ="status-login status-error";
                status.innerText = "Please make sure you fill in all the details!";
            }else if(response.status == "error")
            {
                status.className ="status-login status-error";
                status.innerText = "Can't make your appointment right now!!";
            }
            else if(response.status == "success")
            {   formWait.className = "modal-body form-status-hidden";
             formWait1.className = "modal-body form-status-hidden";
             formWait2.className =  "modal-footer form-status-hidden";
             formResponse.className = "modal-body form-response";
             formResponseTxt.innerText = "Your appointment for Dr." + doctorname + " has been made successfully!\n" + "See you on " + day;

            }
        });

    }
    render(){
        return(
            <div className="container-aforms">
                <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title">Appointment Form</h4>

                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>





                            <div class="modal-body form-status" id="form-status-await">
                                <h5 class="modal-title">Appointment Details</h5>
                                <div className="row">
                                    <div class="col-sm-12 col-drop-top form-group">

                                        <select id="doctorState" className="doctorState form-control" onChange={this.doctorDetail}>
                                            {this.doctorList()}

                                        </select>

                                    </div>
                                </div>

                                <div className="row row-details" id="doctor-details">
                                    <div className="col-sm-8 col-drop form-group">
                                        <p class="subheading-form">Days Available</p>
                                        <select id="dayState" class="form-control dayStateClass">

                                        </select>
                                    </div>
                                    <div className="col-sm-6">
                                    </div>

                                </div>
                                <div className="row row-details" id="doctor-details-days">
                                    <div className="col-sm-12 details"id="details">
                                        <div className="doctor-name" id="doctor-name">

                                        </div>
                                        <div className="doctor-type" id ="doctor-type">

                                        </div>


                                    </div>
                                </div>




                            </div>
                            <div class="modal-body form-status" id="form-status-await-1">
                                <h5 class="modal-title">Personal Details</h5>
                                <form>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <p class="subheading-form">Name</p>
                                            <input type="name" class="form-control" id="name" placeholder="Name"/>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <p class="subheading-form">Contact Number</p>
                                            <input type="tel" class="form-control" id="contact" placeholder="+92900-78601"/>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <p class="subheading-form">Address 1</p>
                                        <input type="text" class="form-control" id="address1" placeholder="1234 Main St"/>
                                    </div>
                                    <div class="form-group">
                                        <p class="subheading-form">Address 1</p>
                                        <input type="text" class="form-control" id="address2" placeholder="Apartment, studio, or floor"/>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <p class="subheading-form">City</p>
                                            <input type="text" class="form-control" id="city"/>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <p class="subheading-form">Appointment Branch</p>
                                            <select id="branchState" class="form-control">
                                                <option selected value="North Karachi">North Karachi</option>
                                                <option value="lol">Orangi Town</option>
                                            </select>
                                        </div>
                                    </div>



                                </form>
                                <div className="row">
                                    <div className="col-sm-8">
                                        <div class="status-login status-hidden" id="status-appointment">
                                            Please Make sure you fill in all the fields!</div>    
                                    </div>
                                </div>
                            </div>
                            <div class="modal-body form-response-hidden" id="form-response">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <img src={IMG1} class="img-fluid" alt="Responsive image"/>    
                                    </div>    
                                </div>
                                <div className="row">
                                    <div className="col-sm-3"></div>
                                    <div className="col-sm-6" id="form-response-txt">
                                        Your appointment has been made successfully!    
                                    </div>
                                    <div className="col-sm-3"></div>
                                </div>

                            </div>
                            <div class="modal-footer form-status" id="form-status-await-2">


                                <button type="button" class="btn btn-primary appointment-btn-submit" onClick={this.submitAppointment}>Make Appointment</button>   



                            </div>
                        </div>

                    </div>
                </div>

            </div>
        );
    }



}

export default AppointmentForm;