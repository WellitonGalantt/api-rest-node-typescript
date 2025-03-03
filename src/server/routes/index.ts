import { Router } from "express";

import { CityController } from "../controllers/city.controller";

const router = Router();

router.get('/cidades', 
  CityController.queryValidation,
(req, res) => {
  CityController.getAll(req, res);
});

router.get('/cidades/:id', 
  CityController.paramValidation,
(req, res) => {
  CityController.getById(req, res);
});

router.put('/cidades/:id', 
  CityController.updateValidation,
(req, res) => {
  CityController.updateById(req, res);
});

router.delete('/cidades/:id', 
  CityController.paramValidation,
(req, res) => {
  CityController.deleteById(req, res);
});


//--------------------------------------------


router.post("/cidades",
  CityController.createValidation,// Middleware de validação
  (req, res) => {
    CityController.createCity(req, res)
  }
); //Controller


export { router };