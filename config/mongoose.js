const mongoose = require('mongoose');
const mysql = require('mysql');
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost/db_project');  //connect db
const db = mongoose.connection;  //acquire the connection
https://teams.microsoft.com/l/meetup-join/19%3ameeting_MTM1NGY4Y2UtOThlOS00OTIxLWEzNzgtOTkxNjFlNDFlYTIy%40thread.v2/0?context=%7b%22Tid%22%3a%221f4f7eda-6e51-425e-a0f9-4c2fcef58a52%22%2c%22Oid%22%3a%22eba7b72b-0aea-4561-a895-11374f2468d8%22%7d


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Success db');
});





