const buttonSearch = document.querySelector("#page-home main a")
const modal = document.querySelector("#modal")
const close = document.querySelector("#modal .header a")

//EVENTO PARA REMOVER A CLASS HIDE DO MODAL
buttonSearch.addEventListener("click", () =>{
    modal.classList.remove("hide")
})

close.addEventListener("click", () =>{
    close.classList.add("hide")
    console.log(close)
})

