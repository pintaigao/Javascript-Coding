import express from "express";

import * as homeController from "./controllers/home";

import logger from './libs/logger';

const app = express();

const PORT: number = app.get("port") || 3000;
const ENV: string = app.get("env");


app.get("/index", homeController.index);

const server = app.listen(PORT, () => {
  logger.info("App is running at http://localhost:%d in %s mode", PORT, ENV);
  logger.info("Press CTRL-C to stop\n");
});

export default server;
