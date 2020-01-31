/* eslint-disable no-unused-expressions */
// eslint-disable-next-line strict
'use strict';

// ================ SET UP OUR SERVER ================ //

const express = require('express');
const router = express.Router();

const category = require('../models/category-model.js');
const product = require('../models/product-model.js');

function getModel(req , res , next) {
// we use middlemare here to attach model to req.params (add Sth dynamic to req.params )
  let model = req.params.model;

  switch (model) {
  case 'category':
    req.model = category;
    next();
    return;
  case 'product':
    req.model = product;
    next();
    return;
  default:
    next('this Model is Not Exicts ');
    return;
  }
}

router.param('model' , getModel);

// ======================== USE Our Route =================== //

router.get('/api/v1/:model' , handleGetAll);
router.get('/api/v1/:model/:id' , handleGetOneById);
router.post('/api/v1/:model' , handlePost);
router.put('/api/v1/:model/:id' , handleUpdate);
router.delete('/api/v1/:model/:id' , handleDelete);

// ======================= REST function ===================== //

function handleGetAll(req , res , next) { // use PROMISE
  req.model.read()
    .then( results =>{
      let count = results.length;
      console.log('++++++++' ,typeof results , typeof count , results);
      res.json({count , results});
    }).catch(next);
}

function handleGetOneById(req , res , next) {
  let id = req.params.id;
  req.model.read(id)
    .then( record =>{
      console.log('get oneeeeeeee' , record);
      res.status(200).json(record);
    }).catch(next);
}

function handlePost(req , res , next) {
  req.model.create(req.body)
    .then( record =>{
      console.log('get oneeeeeeee' , record);
      res.status(201).json(record);
    }).catch(next);
}

function handleUpdate(req , res , next) {
// to update item we need the id and the whole item so we need req.params.id and req.body
  let id = req.params.id;
  req.model.put( id , req.body)
    .then( record =>{
      res.json(record);
      console.log('update oneeeeeeee' , record);
    }).catch(next);
}

function handleDelete(req , res , next) {
  let id = req.params.id;
  req.model.delete(id)
    .then (record =>{
      res.json(record);
      console.log('delte oneeeeeeee' , record);
    }).catch(next);
}

module.exports = router;






