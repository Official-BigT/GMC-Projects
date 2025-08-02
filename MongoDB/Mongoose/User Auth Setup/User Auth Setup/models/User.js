import mongoose from "mongoose";

// Define the User schema
// This schema will be used to create a User model as a collection structure in MongoDB
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
})

// Create the User model from the schema
// This will create a collection named 'users' in the MongoDB database
const User = mongoose.model("User", UserSchema);

export default User;