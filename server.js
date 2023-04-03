const express = require("express");
const db = require('./src/models/index.js')
const app = express();
// const router = require('./src/routes/index.js')

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1',require('./src/routes/index.js'));
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to sample crud" });
});

db.sequelize.sync()
.then(()=>{
console.log("DB connected successfully")
}).catch(err=>{
    console.log(err.message)
})
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});