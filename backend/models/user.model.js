import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
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
  profilePicture: {
    type: String,
    default: "https://www.w3schools.com/howto/img_avatar.png",
  },
  coverPicture: {
    type: String,
    default: "https://www.w3schools.com/howto/img_avatar.png",
  },
  followers: {
    type: Array,
    default: [],
  },
  following: {
    type: Array,
    default: [],
  },
  headline: {
    type: String,
    default: "Hello, I am using LinkedIn Clone",
  },
  skills: [{type: String}],
  education: [
    {
      college:{type:String},
      degree:{type:String},
      fieldOfStudy:{type:String},
    },
  ],
    location: {type:String},
    gender: {
      type:String,
      enum:["male", "female", "other"]
    },
  experience: [
    {
      company: { type: String },
      position: { type: String },
      startDate: { type: Date },
      endDate: { type: Date },
      description: { type: String },
    },
  ],
connection:[
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
}
]

},{timestamps: true});

export const User = mongoose.model("User", userSchema);