import { Router } from "express";

import { StatusCodes } from "http-status-codes";

const router = Router();


router.get("/", (_, res) => {
  res.send("Hello World!");
});


router.post("/teste", (req, res): any => {
  console.log(req.body);

  return res.json(req.body);
  // return res.send("teste");
})

//Usamos para passar parametros na url
router.get("/teste/:id", (req, res): any => {
  console.log(req.params.id);

  return res.send(req.params.id);
})

//Usamos o query para passar parametros na url para pesquisas/buscas, ex:http://localhost:3000/teste?pesquisa=top
router.get("/teste", (req, res): any => {
  console.log(req.query);

  return res.send(req.query);
})


router.get("/teste", (req, res): any => {
  console.log(req.cookies);

  return res.status(StatusCodes.UNAUTHORIZED).send(req.cookies);
})

export { router };