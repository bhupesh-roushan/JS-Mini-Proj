let toastBox= document.getElementById("toastBox")
let successMsg="Sucessfully Submitted";
let errorMsg="Please fix the Error"
let invalidMsg="Invalid input,Check again"





function showToast(msg)
{
    let toast = document.createElement("div")
    toast.classList.add("toast")
    toast.innerHTML= msg
    toastBox.appendChild(toast)
    if(msg.includes("error")){
        toast.classList.add("error")
    }
    if(msg.includes("invalid")){
        toast.classList.add("invalid")
    }
    setTimeout(()=>{
        toast.remove()
    },5000)
}
