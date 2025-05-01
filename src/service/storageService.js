var supabaseClient = require('./../client/supabaseClient');
var maritacaClient = require('./../client/maritacaClient');
var fs = require('fs');
var sharp = require('sharp');

async function salvarImagem(data) {
  let base64 = await converterBase64ParaWebp(data.imagem);
  let imagem = supabaseClient.uploadBase64(base64);

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

async function converterBase64ParaWebp(base64Input) {
  try {
    // Remove prefixo "data:image/...;base64,"
    const base64Data = base64Input.replace(/^data:image\/\w+;base64,/, '')
    const buffer = Buffer.from(base64Data, 'base64')

    // Converte para WebP
    const webpBuffer = await sharp(buffer)
      .webp({ quality: 50 }) // qualidade ajustável (0 a 100)
      .toBuffer()

    // Retorna base64 no formato WebP
    const webpBase64 = 'data:image/webp;base64,' + webpBuffer.toString('base64')
    return webpBase64
  } catch (err) {
    console.error('Erro ao converter para WebP:', err)
    return null
  }
}

module.exports = {
  salvarImagem,
  buscarImagens
};