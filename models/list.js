var db = require('../db');
var ObjectID = require('mongodb').ObjectID;

exports.all = function (cb) {
  db.get().collection('list').find().toArray(function (err, docs) {
    cb(err, docs);
  })
}

exports.findById = function (id, cb) {
  db.get().collection('list').findOne({ _id: ObjectID(id) }, function (err, doc) {
    cb(err, doc);
  })
}

exports.create = function (item, cb) {
  db.get().collection('list').insert(item, function (err, result) {
    cb(err, result);
  })
}

exports.update = function (id, newData, cb) {
  db.get().collection('list').update(
    { _id: ObjectID(id) },
    newData,
    function (err, result) {
      cb(err, result);
    }
  )
}

exports.delete = function (id, cb) {
  db.get().collection('list').deleteOne(
    { _id: ObjectID(id) },
    function (err, result) {
      cb(err, result);
    }
  )
}