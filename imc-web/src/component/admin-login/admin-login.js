import React, { Component } from 'react';
import './admin-login.css'; 
import HTTPService from '../../services/http-service.js';

const http = new HTTPService();
class AdminLogin extends Component{
    constructor(props)
    {
        super(props);
        this.userSubmit = this.userSubmit.bind(this);
        this.adminLogin = this.props.adminLogin;
    }

    userSubmit = (event) => {
        event.preventDefault();
        var userId = document.getElementById('exampleInputEmail1');
        var passWord = document.getElementById('exampleInputPassword1');
        var statusLogin = document.getElementById('status-login');
        //statusLogin.className -="hidden";
        statusLogin.className ="status-login status-attempting";
              

        http.userLogin(userId.value.toString(), passWord.value.toString()).then((response) =>{
            var statusLogin = document.getElementById('status-login');
            if(response.status == "unknown")
            {              statusLogin.className ="status-login status-error";
             statusLogin.innerHTML = "User ID doesn't exist!";
            }
            else if(response.status == "wrong")
            {  
                statusLogin.className ="status-login status-error";
                statusLogin.innerHTML = "Incorrect User ID or password!";

            }
            else if(response.status == "incomplete")
            {
                statusLogin.className ="status-login status-error";
                statusLogin.innerHTML = "Please enter your User ID and password!";
            }
            else if(response.status == "success"){
                statusLogin.innerHTML = "Success!";
            }

        });



    }

    render(){
        return(
            <div className="container-admin-login">
                <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLongTitle">Administrator Portal</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form >
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">User ID</label>
                                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter User ID"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Password</label>
                                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                                    </div>


                                    <div class="modal-footer">
                                        <div class="status-login status-hidden" id="status-login">
                                            verifying your credentials...</div>
                                        <button  type="submit" class="btn btn-primary" onClick={this.userSubmit}>Login</button>
                                    </div>



                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>);

    }




}

export default AdminLogin;