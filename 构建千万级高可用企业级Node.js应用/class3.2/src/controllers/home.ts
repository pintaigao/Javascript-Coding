import { Request, Response } from "express";
import logger from '../libs/logger';

export const index = (req: Request, res: Response) => {
  logger.info("you visit index");
  res.send("<h1>home</h1>");
};
