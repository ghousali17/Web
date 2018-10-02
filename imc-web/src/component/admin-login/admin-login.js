import React, { Component } from 'react';
import './admin-login.css'; 



class AdminLogin extends Component{
   constructor(props)
    {
        super(props);
        this.userSubmit = this.userSubmit.bind(this);
    }
    userSubmit = () => {
       var userID = document.getElementById('exampleInputEmail1');
       var passWord = document.getElementById('exampleInputPassword1');
       var user = {
           "userName": userID.value.toString(), 
           "password":passWord.value.toString()
       };
    console.log(user);
        
        
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
                                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputPassword1">Password</label>
                                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                                    </div>
                                    <div class="form-group form-check">
                                        <div class="modal-footer">
                                            <button type="submit" class="btn btn-primary" onClick={  this.userSubmit} >Login</button>
                                        </div>

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