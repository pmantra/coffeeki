import axios from 'axios';

 async function login(username,password) {
    let response = await callLogin(username,password);
    return response.data;
}

 function callLogin(username,password) {
    let url = 'http://localhost:8080/auth/login';
    let headers = {
        'Content-Type': 'application/json'
    };
    let data = JSON.stringify({"data": {
            'username': username,
            'password' : password
        }
    });
    return axios({
        url: url,
        method: 'post',
        headers: headers,
        data: data
    }).then(function (response) {
            console.log(response);
            return response;
        })
        .catch(function (error) {
            console.log(error);
        });
}

export {login}
