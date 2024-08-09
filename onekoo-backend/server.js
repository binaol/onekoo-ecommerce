const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const involvementRoutes = require("./routes/involvementRoute");
const achievementRoutes = require("./routes/achievementRoute");
const userRoutes = require("./routes/userRoute");
const categoryRoutes = require("./routes/categoryRoutes");
const orderRoutes = require("./routes/orderRoutes");
const shopRoutes = require("./routes/shopRoutes");
const paymentRoutes = require("./routes/paymentRoutes");

const app = express();

app.use(express.static("uploads"));
app.use(
  cors({
    origin: true, // Allows any origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Allows any method
    credentials: true, // Allows cookies and other credentials
  })
);
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/involvement", involvementRoutes);
app.use("/api/achievement", achievementRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/shops", shopRoutes);
app.use("/api/payment", paymentRoutes);
app.get("/qne", (req, res) => {
  res.json("you are here!");
});
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
