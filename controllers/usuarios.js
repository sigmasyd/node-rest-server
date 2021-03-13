// es redundante porque ya se autoimporta.. pero se lo pone
// para que vscode detecte y cargue las funciones
const {response} = require('express');

const usuariosGet = (req, res) => {
    res.json({
        msg: "GET ... controller"
    });
}
const usuariosPost = (req, res) => {
    res.status(400).json({
        msg: "PUT ... controller"
    });
}
const usuariosPut = (req, res) => {
    res.status(201).json({
        msg: "POST ... controller"
    });
}
const usuariosDelete = (req, res) => {
    res.json({
        msg: "DELETE ... controller"
    });
}
module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete
}