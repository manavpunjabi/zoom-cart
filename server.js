const express = require("express");
const connectDB = require("./config/db");
const fileUpload = require("express-fileupload");
const app = express();
// Connect to MongoDB
connectDB();

// Init Middleware
app.use(fileUpload());
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API Running"));

// Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/products", require("./routes/api/products"));
app.use("/api/orders", require("./routes/api/orders"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started on PORT ${PORT}`));
