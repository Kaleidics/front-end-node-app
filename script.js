'use strict'

function submit() {
    $('#login-form').on('submit', function(event) {
        event.preventDefault();
        console.log('clicked')
        sendLogin();
    });
}


function sendLogin() {
    const url = 'http://localhost:8080/login';
    const username = $('#username').val();
    const password = $('#password').val();
    
    const loginCreds = {
        userName: username,
        password: password
    }
    console.log(username, password, JSON.stringify(loginCreds));
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(loginCreds),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(err => console.log('Error', err));
}

submit();