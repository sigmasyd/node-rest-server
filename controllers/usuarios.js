// es redundante porque ya se autoimporta.. pero se lo pone
// para que vscode detecte y cargue las funciones
const {request,response} = require('express');

const usuariosGet = (req = request, res=response) => {
  const {q,nombre='No name',apiKey,page=1,limit=5} = req.query;
    res.json({
        msg: "GET ... controller",
        q,
        nombre,
        apiKey,
        page,
        limit
    });
}
const usuariosPost = (req, res=response) => {
  const {nombre} = req.body;
  res.json({
      msg: "POST ... controller",
      nombre
  });
}
const usuariosPut = (req, res) => {    
  const id = req.params.id;
  res.status(201).json({
      msg: "PUT ... controller",
      id
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