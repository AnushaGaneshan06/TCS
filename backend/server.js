const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const submissionRoutes = require("./routes/submissionRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("✅ MongoDB connected"))
    .catch(err => console.error(err));

app.use("/api/submissions", submissionRoutes);

app.listen(process.env.PORT, () => {
    console.log(`🚀 Server running on port ${process.env.PORT}`);
});
