const express = require("express");
const mongodb = require("mongodb");

// Initiate express
const app = express();
// **Parse the incoming request body--json payload
app.use(express.json());

// Connection string to the online server Atlas MongoDB
// This is the connection string to the online server Atlas MongoDB
const connectionURI =
  "mongodb+srv://official-bigt:el-timano21@brw-cluster.qmdskhj.mongodb.net/";

// Connection string to the local server Compass MongoDB
// This is the connection string to the local server Compass MongoDB
// const connectionURI = "mongodb://localhost:27017";

// MongoClient is a class in MongDB drivers that manages connections to MongoDB driver
const client = new mongodb.MongoClient(connectionURI);

// Connect to mongoDB
client
  .connect()
  .then(() => console.log("Connection to MongoDB server was successful"))
  .catch((error) => console.log(error));
// Above is the easiest way _-_ shorter code syntax to connect to mongodb driver, create a database and a collection in the server

// Creation of the DB in the server
const db = client.db("brwDB");
const student = db.collection("student");

// Add/ insert a new single document to the collection
app.post("/add-student", (req, res) => {
  const { name, email, dept, age } = req.body;
  student
    .insertOne({
      // name: "Adam Russo",
      // email: "adamrusso@gmail.com",
      // dept: "Full Stack Development-(Backend)",
      // age: 21,

      name: name,
      email: email,
      dept: dept,
      age: age,
    })

    .then(() => res.status(201).send("Student added successfully"))
    .catch((error) => res.status(501).send(error.message));
});

// Insert multiple documents to the collection
app.post("/add-students", (req, res) => {
  const students = req.body;
  student
    .insertMany(students)
    .then(() => res.status(201).send("Students added successfully"))
    .catch((error) => res.status(501).send(error.message));
});

// Get single document from the collection- with name, age, any field in the object(using email as an example)
app.get("/student", (req, res) => {
  // reg.query is used to get the query parameters from the URL to find in db collection.
  // For example, if the URL is http://localhost:5680/student?email=
  const { email } = req.query;
  student
    .findOne({ email: email })
    // student.findOne({email: "adamrusso@gmail.com"})
    .then((data) => res.status(200).send(data))
    .catch((error) => res.status(500).send(error.message));
});

// Find multiple documents from the collection
app.get("/students", (req, res) => {
  // reg.query is used to get the query parameters from the URL to find in db collection.
  // For example, if the URL is http://localhost:5680/students?dept=Full Stack Development-(Backend)
  const { age } = req.query;
  student
    .find({ age: parseInt(age) })
    .toArray()
    .then((data) => res.status(200).send(data))
    .catch((error) => res.status(500).send(error.message));
});

// To update a single document in the collection
app.put("/update-student", (req, res) => {
  const { email } = req.query;
  const { name, dept, age } = req.body;
  // The findOneAndUpdate() method is used to find a single document and update it in the collection
  student
    .findOneAndUpdate(
      { email },
      { $set: { name, dept, age } },
      { returnDocument: "after" }
    )
    //the $set operator is used to update the field in the document
    // The returnDocument: "after" option is used to return the updated document after the update operation
    .then((data) =>
      res
        .status(200)
        .json({ message: "Student updated successfully", updatedStudent: data })
    )
    .catch((error) => res.status(500).send(error.message));
});

// To update a multiple documents in the collection
app.put("/update-students", (req, res) => {
  const { age } = req.query;
  const { dept } = req.body;
  student
    .updateMany(
      { age: parseInt(age) },
      { $set: { dept } } // The $set operator is used to update that field in the document.
    )
    .then((data) =>
      res
        .status(200)
        .json({
          message: "Students updated successfully",
          updatedStudent: data,
        })
    )
    .catch((error) => res.status(500).send(error.message));
});

// To delete a single document from the collection
app.delete("/delete-student", (req, res) => {
    const { email } = req.query;
    student 
    .deleteOne({email})
    .then(() => res.status(200).send("Student deleted successfully"))
    .catch((error) => res.status(500).send(error.message));
})

// Delete multiple documents from the collection
app.delete("/delete-students", (req, res) => {
  const { age } = req.query;
  student
    .deleteMany({ age: parseInt(age) })
    .then(() => {
      res
        .status(200)
        .send(`Students deleted successfully`);
    })
    .catch((error) => res.status(500).send(error.message));
});

// **Backend -> custom server creation
app.listen(5680, () => {
  console.log("Server is running on port 5680");
});
