var maritacaClient = require('./../client/maritacaClient');
var supabaseClient = require('./../client/supabaseClient')

async function salvarComentario(data) {

  let response = await maritacaClient.classificacao(data.comentario);
  
  
  try {
    supabaseClient.inserirComentario(data.comentario, response)
  } catch (error) {
    //vá pra frente
  }
}

module.exports = {
  salvarComentario
};