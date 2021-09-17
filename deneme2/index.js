const express = require("express");
const app = express();
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");

dotenv.config();

//Database Connection
const db = require('./config/database');
db.authenticate().then(() => {
    console.log('Database connected...');
}).catch(err => {
    console.log('Error: ' + err);
})

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen(5001, () => {
    console.log("Backend server is running in 5001. port!");
});