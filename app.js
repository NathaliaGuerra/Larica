const express = require('express');
const app = express();
const path = require('path');
const port = process.env.port || 3000;

var indexRouter = require('./src/routes/index');

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

app.use(express.static(path.join(__dirname, './public')));

app.use('/', indexRouter);

app.listen(port, function(){
    console.log(`El servidor esta funcionando sobre http://localhost:${port}`)
})