const express = require("express");
const connectDB = require("./config/db");
var cors = require('cors');
const path = require('path');

const app = express();

//midleware 
app.use(express.json({ extended: true }));
app.use(cors());

//connecting mongoDB
connectDB();



//define routers
app.use('/customer', require("./routers/customer"));
app.use('/transactions', require("./routers/transactions"));

//serve static files in production

if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

const PORT = process.env.PORT ||5000;

app.listen(PORT, ()=> console.log(`server started on port ${PORT}`));