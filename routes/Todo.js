const express=require('express');
const router = express.Router();
const UrlPrinter=require('../middleware/url_logger')
const {GetAllTodos, CreateTodo, GetTodo, UpdateTodo, DeleteTodo} = require('../controllers/Todo.js');
router.route('/all').get(UrlPrinter,GetAllTodos);
router.route('/').post(UrlPrinter,CreateTodo);
router.route('/:id').get(UrlPrinter,GetTodo).patch(UrlPrinter,UpdateTodo).delete(UrlPrinter,DeleteTodo);


module.exports = router;