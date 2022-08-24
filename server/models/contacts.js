import mongoose from "mongoose";

const Contact = new mongoose.Schema({
  contactName: { type: String, required: true },
  contactSurname: { type: string, required: true },
  contactAge: { type: Number, required:true },
  contactGender: { type: String, required: true },
  contactCity: { type: String, required: true },
  userId: { type: String, required: true }
})

export default mongoose.model('Contact',Contact)