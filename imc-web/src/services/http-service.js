import 'whatwg-fetch';


class HttpService{


    getDoctors = () =>{

        var promise = new Promise((resolve,reject) =>{
            fetch('http://localhost:3004/getdoctors').then(
                response =>{
                    resolve(response.json());

                }

            );


        });
        return promise; 





    }

    userLogin = (userId, password) =>{

        var promise = new Promise((resolve,reject) =>{
            console.log('attempting ' + userId + " " + password);
            fetch('http://localhost:3004/login',{ 
                 method: 'post', 
                 headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json',
            },
                 body: JSON.stringify({ userId: userId , password : password,})
                                                }).then(
                response =>{
                    resolve(response.json());

                }

            );


        });
        return promise; 



    }
    
     makeAppointment = (appointment) =>{

        var promise = new Promise((resolve,reject) =>{
           
            fetch('http://localhost:3004/addappointment',{ 
                 method: 'post', 
                 headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json',
            },
                 body: JSON.stringify({ 
                     doctorname: appointment.doctorname,
                     name: appointment.name, 
                     contact: appointment.contact,
                     address: appointment.address, 
                     day:  appointment.day, 
                     branch: appointment.branch,
                 })
                                                }).then(
                response =>{
                    resolve(response.json());

                }

            );


        });
        return promise; 



    }




}

export default HttpService;