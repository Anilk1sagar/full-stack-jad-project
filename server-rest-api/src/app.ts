import express from "express";
import cors from "cors";
import compression from "compression";
import routes from "./routes";

const app = express();

app.use(compression());

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// All Api Routes
app.use("/api", routes);

// Not found routes
app.use((req, res, next) => {
  res.status(404).send("Not Found");
});

export default app;
