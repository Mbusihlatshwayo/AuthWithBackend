const jwt = require('jsonwebtoken');


let payload = {
    _id: "ID Hellow World"
};

let secret = '1234567890';

let token = jwt.sign(payload, secret);

console.log(token);

let decoded = jwt.verify(token, secret);

console.log(decoded);