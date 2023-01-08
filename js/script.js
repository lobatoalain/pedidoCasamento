
function alteraFrase(frase){
    const texto = document.getElementsByTagName('h1')

    texto[0].innerHTML = frase
}

const sim = document.querySelector('[data-sim]')
const nao = document.querySelector('[data-nao]')

sim.addEventListener("click", ()=>{
    let top = parseInt(Math.random()*200)
    let right = parseInt(Math.random()*200)

    console.log(top)
    console.log(right)

    sim.style.top = top+'px'
    sim.style.right = right+'px'
})

nao.addEventListener("click", ()=>{
    alert('Resposta correta')
})

const alterar = document.querySelector('#altera')
const caixaAltera = document.querySelector('.caixaAlteraFrase')
const alterou = document.querySelector('#alterou')

alterar.addEventListener("click",()=>{
    alterar.classList.remove('ativa')
    alterar.classList.add('inativa')

    caixaAltera.classList.remove('inativa')
    caixaAltera.classList.add('ativa')
})

alterou.addEventListener("click", ()=>{
    const textoAlterado = document.querySelector('#texto').value
    
    alterar.classList.remove('inativa')
    alterar.classList.add('ativa')
    
    caixaAltera.classList.add('inativa')
    caixaAltera.classList.remove('ativa')
    alteraFrase(textoAlterado)
})