const express=require('express');
const router = express.Router();
const {GetAllTodos, CreateTodo, GetTodo, UpdateTodo, DeleteTodo} = require('../controllers/Todos.js');
router.route('/all').get(GetAllTodos);
router.route('/').post(CreateTodo);
router.route('/id').get(GetTodo).patch(UpdateTodo).delete(DeleteTodo);

module.exports = router;