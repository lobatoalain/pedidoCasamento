const sim = document.querySelector('[data-sim]')
const nao = document.querySelector('[data-nao]')

sim.addEventListener("click", function(){
    let numAleatorio1 = parseInt(Math.random()*200)
    let numAleatorio2 = parseInt(Math.random()*200)

    console.log(numAleatorio1)
    console.log(numAleatorio2)

    sim.style.top = numAleatorio1+'px'
    sim.style.right = numAleatorio2+'px'
})

nao.addEventListener("click", function(){
    alert('Resposta correta')
})
