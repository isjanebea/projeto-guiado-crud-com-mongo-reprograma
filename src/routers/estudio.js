const router = require('express').Router();
const controllers = require('../controllers/estudio')


router.route("/")
    .get(controllers.getAll)
    .post(controllers.create)


router.route("/:id")
    .patch(controllers.updateById)
    .delete(controllers.deleteById)

module.exports = router;