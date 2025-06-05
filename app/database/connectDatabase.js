import mongoose from "mongoose"
const  connectDatabase =  () => {
  return mongoose.connect(process.env.MONGODB_URI);
}

export default connectDatabase