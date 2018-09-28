import 'whatwg-fetch';

class HTTPservice{

    getDoctors = () =>{
        var promise = new Promise((resolve,reject) =>{
            fetch('http:localhost:3004/').then( 
                response => {
                    resolve(response.json());
                }); //fetch function call

        });//new Promise constructor



        return promise; 
    }

    postUser = () =>{
        var promise = new Promise((resolve,reject) => {
            fetch('http:localhost:3004/login',
                  {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userName: 'Ghous',
                    passWord: '1234',
                })
            }
            ).then( response =>{

                resolve(response.json());


            })
        });
        return promise;}



}

export default HTTPservice;