const express = require('express');
const router = express.Router();
/* Controllers */
const home = require('../controllers/home');
const image = require('../controllers/image');

/* Rutas */
module.exports = app => {
    router.get('/', home.index);
    router.get('/images/:image_id', image.index);
    router.post('/images', image.create);
    router.post('/images/:image:id/like', image.like);
    router.post('/images/:image:id/comments', image.comment);
    router.delete('/images/:image:id', image.delete);

    app.use(router);

};