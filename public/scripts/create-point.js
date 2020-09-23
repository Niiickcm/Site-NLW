
function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( (res) => { return res.json()})
    .then( states => {

        for( const state of states){
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
    })    
}

populateUFs()

function getCities(event){
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text
    const ufValue = event.target.value
    
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
    
    //reseta as cidades do estado selecionado
    citySelect.innerHTML ="<option value>Selecione a Cidade</option>"
    citySelect.disabled = true

    fetch(url)
    .then( (res) => { return res.json()})
    .then( cities => {

        for( const city of cities){
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }
        citySelect.disabled = false

    })   
    
}

//buscando o select do html que tem o name uf
document.querySelector("select[name=uf]")
.addEventListener("change", getCities)


const itemsToCollect = document.querySelectorAll(".items-grid li")

for(const items of itemsToCollect){
    items.addEventListener("click", handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items]")

let selectedItems = []

function handleSelectedItem(event){
    const itemLi = event.target

    //adicionar ou remover class 
    itemLi.classList.toggle("selected")
    const itemsId = event.target.dataset.id


    // verificar se existe items selecionados, se sim
    //pegar os items 
    //findIndex esta procunrando a posição do array e adiciona na variavel item
    const alreadySelected = selectedItems.findIndex((item) =>{
        const itemFound = item == itemsId

        return itemFound
    })

    //se já estiver selecionado
    if(alreadySelected >= 0){
    // tirar da seleção
    //filter está filtrando os items do array e comparando com o id do array
    const filteredItems = selectedItems.filter( (items) =>{
        const itemsIsDifferent = items != itemsId //false
        return itemsIsDifferent
        
    })
        selectedItems = filteredItems
    }else{
    //se não tiver selecionado, adicionar na seleção
        selectedItems.push(itemsId)
    }
    //atualizar o campo escondido com os items selecionados
    collectedItems.value = selectedItems
}