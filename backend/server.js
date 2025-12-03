const express = require('express');
const dotenv = require("dotenv");
const cors = require("cors");
const db = require("./config/db");

dotenv.config();
db();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/auth", require("./routes/auth.routes"));
app.use("/helpline", require("./routes/helpline.routes"));
app.use("/emergency-tips",require("./routes/emergencyTips.routes"));
app.use("/mental", require("./routes/mental.routes"));
app.use("/journals", require("./routes/journal.routes"));

app.get("/", (req, res) => {
  res.send("API is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));