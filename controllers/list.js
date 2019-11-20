var List = require('../models/list');

exports.all = function (req, res) {
  List.all(function (err, docs) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(docs);
  })
}

exports.findById = function (req, res) {
  List.findById(req.params.id, function (err, doc) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(doc);
  })
}

exports.create = function (req, res) {
  var item = {
    name: req.body.name
  };

  List.create(item, function (err, result) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(item);
  })
}

exports.update = function  (req, res) {
  List.update(req.params.id, { name: req.body.name }, function (err, result) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.sendStatus(200);
  })
}

exports.delete = function (req, res) {
  List.delete(req.params.id, function (err, result) {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.sendStatus(200);
  })
}