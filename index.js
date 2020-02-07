// eslint-disable-next-line strict
'use strict';

// make the enviroment ready
require('dotenv').config();
let mongoose = require('mongoose');
const server = require('./lib/server.js');


const mongooseOptions = {
  useNewUrlParser :true ,
  useCreateIndex : true ,
  useUnifiedTopology : true};

// connect our App with mongoDB
mongoose.connect(process.env.MONGOOSE_URI ,mongooseOptions);
// let my server fire
server.start(process.env.PORT);