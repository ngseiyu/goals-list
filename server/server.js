require("dotenv").config();
const express = require("express");
const colors = require("colors");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/goals", require("./routes/goalRoutes"));
app.use("/users", require("./routes/userRoutes"));
app.use(errorHandler);

const start = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
    } catch (error) {
        console.log(error);
    }
};

start();