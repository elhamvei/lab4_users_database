// https://github.com/elhamvei/lab4_users_database

const express = require('express');
const mongoose = require('mongoose');
const UserRoutes = require('./routes/UserRoutes.js');

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://elhamvei:Abc_1234@cluster0.quqgho6.mongodb.net/UserData?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(success => {
  console.log('Success Mongodb connection')
}).catch(err => {
  console.log(err)
});

app.use(UserRoutes);

app.listen(3000, () => { console.log('Server is running...') });
