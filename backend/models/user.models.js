import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phonenumber:{
    type: Number,
    required: true,
  },
  role:{
    type: String,
    Enumerator: ["student", "recruiter"],
    required: true,
  },
  profile:{
    type: String,
    required: false,
    bio:{
      type: String,
      required: false,
    },resume:{
      type: String,
      required: false,
    },
    company:{
      type: mongoose.Schema.Types.ObjectId,ref: "Company",},
      profilephoto:{
        type: String,
        default:""
      },
  },
},{timestamps:true});
const User = mongoose.model("User", userSchema);