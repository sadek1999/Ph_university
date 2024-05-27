import mongoose from "mongoose";
import app from "./app";
import config from "./config";
const port=3000

async function main() {
    await mongoose.connect(config.db_url as string);
    //
    app.listen(config.prot, () => {
        console.log(`Example app listening on port ${config.prot}`)
      })
  }
  main()