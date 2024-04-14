import mongoose from "mongoose";
import config from "./mongodb";
import { env } from "./environment";
const db = config.db;
const URL = `${env.MONGODB_URI}/${db.name}`;

//SINGLETON PATTERN
class DataBase {
  constructor() {}
  async connect() {
    await mongoose.connect(URL).then(() => {
      console.log(`Connected!`);
    });
  }
  static getInstance() {
    if (!DataBase.instance) {
      DataBase.instance = new DataBase();
    }
    return DataBase.instance;
  }
}

const dbConnect = DataBase.getInstance();

export default dbConnect;
