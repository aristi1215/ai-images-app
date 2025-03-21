import mongoose from "mongoose";

const connectdb = (url: string) => {
  mongoose.set("strictQuery", true);

  mongoose
    .connect(url)
    .then(() => console.log("successfully connected to db"))
    .catch((err) => console.error(err));
};


export default connectdb
