var { createClient } = require('@supabase/supabase-js');
const supabaseUrl = process.env.SUPABASE_URL_BASE
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

async function inserirComentario(comentario, classificacao) {
    try {
      classificacao = classificacao.replace(" ", "")

      const response  =  await supabase.from('comentarios').insert([{ comentario: comentario, situacao: classificacao == 'ofensivo' ? 'Pendente' : 'Aprovado' }])
        
    } catch (error) {
        console.error('Erro ao salvar comentário:', error);
        throw new Error('Erro ao salvar comentário');
    }
}

async function buscarComentarios() {
  try {

    const { data, error } =  await supabase.from('comentarios').select('*')
    console.log(data)
    return data;
      
  } catch (error) {
      console.error('Erro ao salvar comentário:', error);
      throw new Error('Erro ao salvar comentário');
  }
}

async function salvaConfirmacaoPresenca(nome, telefone) {
  try{
    
    const response  =  await supabase.from('presenca').insert([{ nome: nome, telefone: telefone}])
      
  } catch (error) {
      console.error('Erro ao salvar comentário:', error);
      throw new Error('Erro ao salvar comentário');
  }
}

async function uploadBase64(base64String) {
  try {
    // Extrai o tipo MIME e os dados da string base64
    const matches = base64String.match(/^data:(.+);base64,(.+)$/);
    if (!matches) throw new Error('Base64 inválido');

    const mimeType = matches[1];
    const base64Data = matches[2];

    const buffer = Buffer.from(base64Data, 'base64');

    let imagens = await buscarImagens(1000, 1);

    // Upload para o Storage
    const { data, error } = await supabase.storage
      .from('fotos') // substitua pelo nome real do seu bucket
      .upload((imagens.length+1)+".webp", buffer, {
        contentType: mimeType,
        upsert: true // sobrescreve se já existir
      });

    if (error) throw error;

    console.log('Upload realizado com sucesso:', data);
    return data;
  } catch (error) {
    console.error('Erro no upload:', error.message);
    throw error;
  }
}

async function buscarImagens(numeroItens, pagina) {
  const { data, error } = await supabase
    .storage
    .from('fotos') // Substitua pelo nome do bucket
    .list('', {
      limit: numeroItens, // número máximo de arquivos por chamada
      offset: pagina-1
    })

  return data;
}

module.exports = {
  inserirComentario,
  buscarComentarios,
  uploadBase64,
  buscarImagens,
  salvaConfirmacaoPresenca
};