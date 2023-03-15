const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://Bhargavpatelnt:Patel@123@cluster0.n4ctsyb.mongodb.net/YDS/ydsform",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("MongoDB connection failed: ", error);
  });

const Schema = mongoose.Schema;
const ydsform = new Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  campus: {
    type: String,
    required: true,
  },

  course: {
    type: String,
    required: true,
  },

  address: {
    type: String,
    required: true,
  },

  phone: {
    type: Number,
    required: true,
  },

  birthdate: {
    type: String,
    required: true,
  },

  indianaddress: {
    type: String,
    required: true,
  },

  statusincanada: {
    type: String,
    required: true,
  },
});

const Yds = mongoose.model("Yds", ydsform);

app.post("/api/submit", (req, res) => {
  const {
    name,
    email,
    campus,
    course,
    address,
    phone,
    birthdate,
    indianaddress,
    statusincanada,
  } = req.body;

  const data = new MyModel({
    name,
    email,
    campus,
    course,
    address,
    phone,
    birthdate,
    indianaddress,
    statusincanada,
  });

  data
    .save()
    .then(() => {
      res.json({ message: "Data saved successfully" });
    })
    .catch((error) => {
      res.json({ error });
    });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
