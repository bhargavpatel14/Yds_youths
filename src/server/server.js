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
  .connect("mongodb+srv://Bhargavpatelnt:Patel@123@cluster0.n4ctsyb.mongodb.net/YDS/ydsform", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("MongoDB connection failed: ", error);
  });

const Schema = mongoose.Schema;
const mySchema = new Schema({
  name: String,
  email: String,
  campus: String,
  course:String,
  address: String
  phone: String,
  birthdate: Date,
  indianaddress: String,
  statusincanada: String

});

const MyModel = mongoose.model("MyModel", mySchema);

app.post("/api/submit", (req, res) => {
  const { name, email, campus,course, address, phone, birthdate, indianaddress, statusincanada } = req.body;

  const data = new MyModel({ name, email, campus, course, address, phone, birthdate, indianaddress, statusincanada});

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
