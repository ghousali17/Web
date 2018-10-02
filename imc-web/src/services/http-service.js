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

    userLogin = () =>{
        var promise = new Promise((resolve,reject) =>{
            fetch('http://localhost:3004/login',{ method: 'post', body:JSON.stringify({ "username": "lol"})}).then(
                response =>{
                    resolve(response.json());

                }

            );


        });
        return promise; 



    }




}

export default HttpService;