var maritacaClient = require('./../client/maritacaClient');
var supabaseClient = require('./../client/supabaseClient')

async function salvarComentario(data) {
  try {
    let response = await maritacaClient.classificacao(data.comentario);
    supabaseClient.inserirComentario(data.comentario, response)
    return {"classificacao": response};
  } catch (error) {
    //vá pra frente
  }
}

async function buscarComentarios() {
  
  try {
    return await supabaseClient.buscarComentarios();
  } catch (error) {
    //vá pra frente
  }
}

async function salvaConfirmacaoPresenca(data) {
  try {
    supabaseClient.salvaConfirmacaoPresenca(data.nome, data.telefone)
  } catch (error) {
    //vá pra frente
  }
}

module.exports = {
  salvarComentario,
  buscarComentarios,
  salvaConfirmacaoPresenca
};