//-- arquivo: controller/ctlHello.js
const hello = (req, res) => (async () => {
res.json({ status: "ok", "mensagem": "Olá segundo!" });
})();
const helloUserGet = (req, res) => (async () =>{
const username = req.params.nome;
res.json({ status: "ok", "nomeusuario": username });
} )();
const helloUserPost = (req, res) => (async () =>{
const { username } = req.body
res.json({ status: "ok", "nomeusuario": username });
} )();
module.exports = {
hello,
helloUserGet,
helloUserPost,
}