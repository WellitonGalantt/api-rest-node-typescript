import { Router } from "express";

import { CityController } from "../controller/city.controller";

const router = Router();

router.post("/cidades",
  CityController.bodyValidation,// Middleware de validação
  CityController.queryValidation,// Middleware de validação
  (req, res) => {
    CityController.createCity(req, res)
  }); //Controller


export { router };