const form = document.getElementById('form-atividade')
const ImgAprovado = '<img src="images/aprovado.png" alt="Emoji celebrando" />'
const ImgReprovado = '<img src="images/reprovado.png" alt="Emoji decepcionado" />'
const Atividades = []
const Notas = []
const SpanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const SpanReprovado = '<span class="resultado reprovado">reprovado</span>'
const notaMinima = parseFloat(prompt('Digite a Nota mínima'))

linhas = ''
form.addEventListener('submit', function (e) {
    e.preventDefault()
    AdicionaLinha()
    AtualizaTabela()
    AtualizaMedia()
})


function AdicionaLinha() {
    const InputNomeAtividade = document.getElementById('nome-atividade')
    const InputNotaAtividade = document.getElementById('nota-atividade')

    if (Atividades.includes(InputNomeAtividade.value)) {
        alert(`Atividade: ${InputNomeAtividade.value} Já foi inserida !`)
    } else {

    Atividades.push(InputNomeAtividade.value)
    Notas.push(parseFloat(InputNotaAtividade.value))

    let linha = '<tr>'
    linha += `<td>${InputNomeAtividade.value}</td>`
    linha += `<td>${InputNotaAtividade.value}</td>`
    linha += `<td>${InputNotaAtividade.value >=  notaMinima ? ImgAprovado : ImgReprovado}</td>`
    linha += '</td>'

    linhas += linha

 }
    InputNomeAtividade.value = ''
    InputNotaAtividade.value = ''
}

function AtualizaTabela() {
    const CorpoTabela = document.querySelector('tbody')
    CorpoTabela.innerHTML = linhas
}

function AtualizaMedia() {
    const MediaFinal = CalculaMediaFinal()
    document.getElementById('media-final-valor').innerHTML = MediaFinal.toFixed()
    document.getElementById('media-final-resultado').innerHTML = MediaFinal >=  notaMinima ? SpanAprovado : SpanReprovado

}

function CalculaMediaFinal() {
    let somaNota = 0
    for (let i = 0; i < Notas.length; i++) {
        somaNota += Notas[i]
    }
    return somaNota / Notas.length
}