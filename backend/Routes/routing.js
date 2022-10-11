const express = require('express');

const routing = express.Router();
const ListController = require('../Controller/ListController');


// FOR LISTS
routing.post('/lists', ListController.postlists);

routing.get('/lists', ListController.getlists);

routing.put('/lists/:id', ListController.updatelists);

routing.delete('/lists/:id', ListController.deletelists);


// FOR TASKS
routing.post('/lists/:listId/tasks', ListController.posttasks);

routing.get('/lists/:listId/tasks', ListController.gettasks);

routing.put('/lists/:listId/tasks/:taskId', ListController.updatetasks);

routing.delete('/lists/:listId/tasks/:taskId', ListController.deletetasks);



routing.all('*', ListController.invalid);


module.exports = routing;
