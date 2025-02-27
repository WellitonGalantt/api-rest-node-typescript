import { Router } from "express";

import { CityController } from "../controller/city.controller";
import { createBodyValidation } from "../shared/middlewares/cityValidation";

const router = Router();

// router.get("/", (req, res) => { CityController.getCity(req, res) });
router.post("/cidades", (req, res, next) => {
  createBodyValidation(req, res, next); //Middleware de validação
  CityController.createCity(req, res);  //Controller
});

export { router };