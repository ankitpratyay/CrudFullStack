const Crud = require("../models/crudModels");

const CRUD_INDEX = (req, res) => {
  Crud.find({}).then((cruds) => {
    console.log(cruds)
    res.json(cruds);
  });
};
const CRUD_CREATE = (req, res) => {
  let crud = req.body;
  Crud.create(crud)
    .then((crud) => {
      res.send(crud);
    })
    .catch(function (err) {
      res.status(422).send(err);
    });
};
const CRUD_GET_ID = (req, res) => {
  Crud.findById(req.params.id)
    .then((crud) => {
      console.log(req.params.id)
      console.log(crud)
      res.json(crud);
    })
    .catch((error) => {
      res.status(404).send("No result Found");
    });
};
const CRUD_UPDATE_ID = (req, res) => {
  Crud.findByIdAndUpdate(req.params.id, req.body)
    .then(function () {
      res.json("user updated");
    })
    .catch((error) => {
      res.status(422).send(`User updation Failed`);
    });
};
const CRUD_DELETE_ID = (req, res) => {
  Crud.findByIdAndRemove(req.params.id)
    .then(() => {
      res.status(200).send(`User Deleted`);
    })
    .catch((error) => {
      res.status(400).send("User delete failed.");
    });
};

module.exports = {
  CRUD_INDEX,
  CRUD_CREATE,
  CRUD_GET_ID,
  CRUD_UPDATE_ID,
  CRUD_DELETE_ID,
};
