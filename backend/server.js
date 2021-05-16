require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const productRoute = require("./routes/productRoutes")

connectDB();

const app = express();

app.use(express.json());

app.use('/api/products', productRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));