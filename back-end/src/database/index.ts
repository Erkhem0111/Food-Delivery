// OrrjcvR1KQsX1wun

import mongoose from "mongoose";

export const connectToDatabase = async () => {
  await mongoose.connect(
    "mongodb+srv://admin:OrrjcvR1KQsX1wun@cluster0.tcoe6m9.mongodb.net/?appName=Cluster0"
  );
};
