let selectField=document.getElementById("selectField")
let selectText=document.getElementById("selectText")
let options=document.getElementsByClassName("options")
let list=document.getElementById("list")
let arrowIcon=document.getElementById("arrowIcon")


selectField.onclick=function(){
    list.classList.toggle("hide")
    arrowIcon.classList.toggle("rotate")
}

for(Option of options){
    Option.onclick=function(){
        selectText.innerHTML=this.textContent
        list.classList.toggle("hide")
        arrowIcon.classList.toggle("rotate")
    }
}

