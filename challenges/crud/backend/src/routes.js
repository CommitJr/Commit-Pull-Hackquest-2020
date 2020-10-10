const express = require('express');
const routes = express.Router();

const BranchController = require('./controllers/BranchController');
const CommitController = require('./controllers/CommitController');

routes
    .route('/branchs')
    .get(BranchController.index)
    .delete(BranchController.delete)
    .post(BranchController.create)
    .put(BranchController.edit);

routes
    .route('/commits')
    .get(CommitController.index)
    .delete(CommitController.delete)
    .post(CommitController.create)
    .put(CommitController.edit);

module.exports = routes;