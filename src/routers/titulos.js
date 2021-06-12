const express = require('express')
const controller = require('../controllers/titulo')


const router = express.Router()


router.route("/")
    .post(controller.criaTitulo)
    .get(controller.mostraTitulos)

router.route("/:id")
    .patch(controller.updateTitulo)
    .delete(controller.deleteTitulo)

//Ler por titulo
router.get(/marvel$|ghibli$|pixar$/, controller.titulosPorEstudio)


module.exports = router