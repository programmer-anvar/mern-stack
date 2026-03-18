const express = require('express');
const postController = require('../controller/post.controller.js');
const router = express.Router();

router.get('/get', postController.getAll); // GET
router.post('/create', postController.create); // POST
router.delete('/delete/:id', postController.delete); // DELETE
router.put('/edit/:id', postController.edit); // PUT
router.get('/get-one/:id', postController.getOne); // GET ONE

module.exports = router;