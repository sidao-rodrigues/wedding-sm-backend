var supabaseClient = require('./../client/supabaseClient');
var maritacaClient = require('./../client/maritacaClient');

async function salvarImagem(data) {

  let imagem = supabaseClient.uploadBase64(data.imagem);

  // let response = await maritacaClient.classificacaoImagem(`https://mboudblszfwbpiyloofk.supabase.co/storage/v1/object/public/fotos/${imagem.path}`);
  // response = response.replace(" ", "")
  // if(response == "ofensivo"){
  //   //deletar imagem
  // }

  try {
    console.log()
  } catch (error) {
    //vá pra frente
  }
}

async function buscarImagens(data) {

  let imagens = await supabaseClient.buscarImagens(parseInt(data.numeroItens), parseInt(data.pagina));
  return imagens;
  //URL para concatenar nas imagens: https://mboudblszfwbpiyloofk.supabase.co/storage/v1/object/public/fotos/

  try {
    console.log()
  } catch (error) {
    //vá pra frente
  }
}

module.exports = {
  salvarImagem,
  buscarImagens
};