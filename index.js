const express = require("express"); // Used to set up a server
const cors = require("cors"); // Used to prevent errors when working locally


const app = express(); // Initialize express as an app variable
app.set("port", process.env.PORT || 6969); // Set the port
app.use(express.json()); // Enable the server to handle JSON requests
app.use(cors()); // Dont let local development give errors


//import userRoute
const userRoute = require("./routes/userRoute")
//import productRoute
const productRoute = require("./routes/productRoute")
//import category
const categoriesRoute = require("./routes/categoriesRoute")
//import from orders
const ordersRoute = require("./routes/ordersRoute")

app.get('/', (req, res) => {
  res.sendFile('./views/index.html', {root: __dirname})
})


app.use("/users", userRoute);
app.use("/products", productRoute);
app.use("/categories", categoriesRoute);
app.use("/orders", ordersRoute);

app.use(express.static("public"));

app.get("/" , function(req , res){
  res.sendFile(__dirname + "/users" + "index.html");
})



app.listen(app.get("port"), () => {
    console.log(`Listening for calls on port ${app.get("port")}`);
    console.log("Press Ctrl+C to exit server");
});