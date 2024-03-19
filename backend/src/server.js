import app from "./app";
import { env } from "./configs/environment";

const PORT = env.DEV_APP_PORT;
const server = app.listen(PORT, () => {
  console.log(`web start with ${PORT}`);
});
