import mongoose, { ConnectOptions } from "mongoose";
import config from "./config";

const options: ConnectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(config.db.uri, options);

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Connected");
});

connection.once("error", (error) => {
  console.log(error);
  process.exit(1);
});
