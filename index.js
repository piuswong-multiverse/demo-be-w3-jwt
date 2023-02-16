const jwt = require('jsonwebtoken');
require('dotenv').config();

// can use jwt.sign(payload, secret) // create a JWT

// JWT_SECRET = "here's a string that everyone can see in my git repo!!!"  // BAD don't do this
const JWT_SECRET = process.env.JWT_SECRET;

// payload => going to be encrypted, user data (name, id, pw, sub, iat = time when generated, exp)
// lots of claims about user could go in here
const user = {
    "name": "Ada Lovelace",
    "occupation": "theoretical computer scientist",
    "lived": "1815-1852"
}

const token = jwt.sign(user, JWT_SECRET);
console.log(token);

// Some time in the future, somebody sends you a JWT...
const receivedToken = token;
try {
    const decrypted = jwt.verify(receivedToken, JWT_SECRET);
    console.log("decrypted:", decrypted);
} catch (err) {
    console.log("You're not allowed in!!!")
}
