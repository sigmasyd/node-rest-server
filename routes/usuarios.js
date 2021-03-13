const {Router} = require('express');
const { usuariosGet, usuariosPost, usuariosPut, usuariosDelete } = require('../controllers/usuarios');
const router = Router();

router.get('/', usuariosGet);
router.put('/', usuariosPost);
router.post('/', usuariosPut);
router.delete('/', usuariosDelete);

module.exports = router;