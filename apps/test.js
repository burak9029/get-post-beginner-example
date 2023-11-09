var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var users = [{
    id: 1,
    name:"brkvrl",
    age:29,
    email:"vburak9029@gmail.com",
},
{"id": 3,
"name": "Test User",
"age" : 20,
"email": "test@test.com"}
];

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json);


app.get('/api/users', function(req,res) {
    return res.json(users);
})


app.post('/api/users', function(req, res) {
    var user = req.body.user;
    users.push(user);
    return res.send("user has been added succesfully");
});