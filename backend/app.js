const express = require('express');

const app = express();
var i = 1;
app.use((req,res,next)=>{

  console.log(this.i);
  next();
  this.i++;
});

app.use((req,res,next)=>{
  res.send('Hello from Express!');
});

module.exports = app;
