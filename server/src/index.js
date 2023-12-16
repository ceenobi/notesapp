import app from "./app.js";
import { connectDB } from "./config/mongoDb.js";

const port = process.env.PORT || 6000

connectDB()
  .then(() => {
    try {
      app.listen(port, () => {
        console.log(`Server running on port ${port}`);
      });
    } catch (error) {
      console.log("Cannot connect to server");
    }
  })
  .catch((error) => {
    console.log("Invalid database connection");
  });
