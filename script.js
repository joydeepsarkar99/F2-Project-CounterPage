let counterValue = document.querySelector("span")
let errorMsg = document.querySelector(".error")
let incrementBtn = document.querySelector("#increment")
let decrementBtn = document.querySelector("#decrement")
let clearBtn = document.querySelector("#clear")

incrementBtn.addEventListener("click",(eventDetails)=>{
    let count = counterValue.innerText
    count++
    counterValue.innerHTML=`${count}`
    if(count >= 1){
        errorMsg.innerText = ""
        clearBtn.style.cssText=`
        display:inline-block`
    }
})

decrementBtn.addEventListener("click",(eventDetails)=>{
    let count = counterValue.innerText
    if(count == 0){
        errorMsg.innerText = `Error : Cannot go below 0`
    }
    else{
        count--
        counterValue.innerHTML=`${count}`
    }
})

clearBtn.addEventListener("click",(eventDetails)=>{
    let count = counterValue.innerText
    if(count >= 1){
        count = 0
        counterValue.innerHTML=`${count}`
        clearBtn.style.cssText=`
        display:none`
    }
})
