//document.getElementById("countit").innerText= 8

let count = document.getElementById("countit")
let Ent =document.getElementById("ent")
let count2 = 0

function increment(){
        count2 += 1
        count.textContent = count2     
}

function saveit(){
        let ent1 = count2 + "-"
        Ent.textContent+= ent1
        count.textContent = 0
        count2 = 0
        
}
 