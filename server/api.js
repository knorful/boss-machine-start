const express = require("express");
const db = require("./db");
const apiRouter = express.Router();

apiRouter.get("/minions", (req, res, next) => {
  const allMinions = db.getAllFromDatabase("minions");
  if (allMinions) {
    res.status(200).send(allMinions);
  } else {
    res.sendStatus(404);
  }
});

module.exports = apiRouter;
