const {Router} = require('express')
const router = Router()
const navbarController = require('../../controller/frontend/navbarController')

router.get('api/v1/getNav',navbarController.getNav)


module.exports = router;