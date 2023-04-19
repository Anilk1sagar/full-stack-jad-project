import app from "./app";
import { config } from "./config";
import connectDb from "./db/connect";

const { port, host } = config;

app.listen(port, host, () => {
  console.log(`Server listening on http://${host}:${port}`);
  connectDb();
});
