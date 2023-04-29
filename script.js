const form = document.getElementById('form-atividade')

const ImgAprovado = '<img src="images/aprovado.png" alt="Emoji celebrando" />'
const ImgReprovado = '<img src="images/reprovado.png" alt="Emoji decepcionado" />'

linhas = ''
form.addEventListener('submit', function(e){
    e.preventDefault()

    const InputNomeAtividade = document.getElementById('nome-atividade')
    const InputNotaAtividade = document.getElementById('nota-atividade')

    let linha = '<tr>'
    linha += `<td>${InputNomeAtividade.value}</td>`
    linha += `<td>${InputNotaAtividade.value}</td>`
    linha += `<td>${InputNotaAtividade.value >= 7 ? ImgAprovado : ImgReprovado}</td>` 
    linha += '</td>'

    linhas += linha
  
    const CorpoTabela = document.querySelector('tbody')
    CorpoTabela.innerHTML = linhas

    InputNomeAtividade.value = ''
    InputNotaAtividade.value = ''
})