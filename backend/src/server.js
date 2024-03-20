//handler error EXCEPTION
// process.on("uncaughtException", (err) => {
//   console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...");
//   console.log(err.name, err.message);
//   process.exit(1);
// });

import app from "./app";
import { env } from "./configs/environment";

const PORT = env.DEV_APP_PORT;
const server = app.listen(PORT, () => {
  console.log(`web start with ${PORT}`);
});

//handler error REJECTION
// process.on("unhandledRejection", (err) => {
//   console.log("UNHANDLED REJECTION! 💥 Shutting down...");
//   console.log(err.name, err.message);
//   server.close(() => {
//     process.exit(1);
//   });
// });
