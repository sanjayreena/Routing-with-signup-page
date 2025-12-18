const express = require("express");
const moongose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");

moongose
  .connect(
    "mongodb+srv://sanjayreena1004:Sanjayreena1004@cluster0.lexfkuj.mongodb.net/"
  )
  .then(() => console.log("MangoDB Connected"))
  .catch((err) => console.log("MangoDB Connection Error:", err));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173/",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: [
      "content-type",
      "Authorization",
      "catch-control",
      "pragma",
      "expires",
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

