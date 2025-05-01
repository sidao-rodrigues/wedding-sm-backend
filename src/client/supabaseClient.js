var { createClient } = require('@supabase/supabase-js');
const supabaseUrl = process.env.SUPABASE_URL_BASE
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

async function inserirComentario(comentario, classificacao) {
    try {

      const { data, error } =  await supabase.from('comentarios').insert([{ comentario: comentario, situacao: classificacao.includes('ofensivo') ? 'Pendente' : 'Aprovado' }])
        
    } catch (error) {
        console.error('Erro ao salvar comentário:', error);
        throw new Error('Erro ao salvar comentário');
    }
}

module.exports = {
  inserirComentario
};