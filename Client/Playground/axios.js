const axios = require('axios');


let data = {
    email:'testy@tester.com',
    username:'hellowAxios',
    password:'1234567890'
}
// axios.post('http://localhost:3000/user/register', data).then((response)=>{
//     console.log(response.status);
// }).catch((err)=> {
//     console.log('Invalid email/username or user already exists')
// })

axios.post('http://localhost:3000/user/login', data).then((response)=>{
    console.log(response.headers['x-auth']);
}).catch((err)=> {
    console.log('wrong username or password')
})

axios.get('http://localhost:3000/private/private', {
    headers:{
        'x-auth':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2Y0NTNlNjc4MjZmYjE0YmM0ZjEzZDAiLCJpYXQiOjE1NTk1MTY1MzB9.kly2Viy-42WCupcCIrCv66fzuGpHs-csL3ngAoE28aQ'
    }
}).then((response)=>{
    console.log(response.data);
}).catch((err)=>{
    console.log('error' + err);
})