
let div = document.createElement("div")
div.className ="container"
div.innerHTML = `<div class=" text-center ">
<h1 class="title"><i class="fa-solid fa-arrow-right arrow"></i>  Game of Thrones Random Quotes   &nbsp<i class="fa-solid fa-arrow-left arrow"></i></h1>
<img src="https://media1.giphy.com/media/3oEjI1erPMTMBFmNHi/giphy.gif?cid=ecf05e47g658pk4t8x9y17noufdwvomm5an32qdfu4m5hvh5&rid=giphy.gif&ct=g" class="gif">
</div>`
document.body.append(div)
let click = document.querySelector(".title")
click.addEventListener("click",()=>{
  location.reload()
})
async function iceandfire (){
    let res = await fetch(`https://api.gameofthronesquotes.xyz/v1/random`)
   let data = await res.json()
    console.log(data)
    let div1 = document.createElement("div")
    className ="container"
    div1.innerHTML = `
    <h2 class="quotes">${data.sentence}<h5 class="by text-secondary">-By  ${data.character.name}</h5></h2>` 
    div.appendChild(div1)

}
iceandfire()