const btn1=document.getElementById("btn1")
const btn2=document.getElementById("btn2")
const btn3=document.getElementById("btn3")
const btn4=document.getElementById("btn4")
const btn5=document.getElementById("btn5")
const btn6=document.getElementById("btn6")
const btn7=document.getElementById("btn7")
const btn8=document.getElementById("btn8")
const btn9=document.getElementById("btn9")
const res=document.querySelector('.result')
let chance="X"


 change_chance = function(){
    if(chance=="X"){
        chance="O"
    }
    else{
        chance="X"
    }
}



btn1.addEventListener("click",function(){
    btn1.innerText=chance
    change_chance()
    check_won()
})
btn2.addEventListener("click",function(){
    btn2.innerText=chance
    change_chance()
    check_won()
})

btn3.addEventListener("click",function(){
    btn3.innerText=chance
    change_chance()
    check_won()
})
btn4.addEventListener("click",function(){
    btn4.innerText=chance
    change_chance()
    check_won()
})
btn5.addEventListener("click",function(){
    btn5.innerText=chance
    change_chance()
    check_won()
})
btn6.addEventListener("click",function(){
    btn6.innerText=chance
    change_chance()
    check_won()
})
btn7.addEventListener("click",function(){
    btn7.innerText=chance
    change_chance()
    check_won()
})

btn8.addEventListener("click",function(){
    btn8.innerText=chance
    change_chance()
    check_won()
})

btn9.addEventListener("click",function(){
    btn9.innerText=chance
    change_chance()
    check_won()
})

 
 const result = function(){
    const h2= document.createElement('h2')
      h2.innerHTML="GAME OVER someone has won"
 res.appendChild(h2)
}

//function for check winning


const check_won = function(){
    if (btn1.innerHTML==btn2.innerHTML&&btn2.innerHTML==btn3.innerHTML&&btn1.innerHTML!=""){
        result()
    }
    else if(btn4.innerHTML==btn5.innerHTML&&btn5.innerHTML==btn6.innerHTML&&btn4.innerHTML!=""){
        result()
    }
    else if(btn7.innerHTML==btn8.innerHTML&&btn8.innerHTML==btn9.innerHTML&&btn7.innerHTML!=""){
        result()
    }
    else if(btn1.innerHTML==btn4.innerHTML&&btn4.innerHTML==btn7.innerHTML&&btn1.innerHTML!=""){
        result()
    }
    else if(btn2.innerHTML==btn5.innerHTML&&btn5.innerHTML==btn8.innerHTML&&btn2.innerHTML!=""){
        result()
    }
    else if(btn3.innerHTML==btn6.innerHTML&&btn6.innerHTML==btn9.innerHTML&&btn3.innerHTML!=""){
        result()
    }
    else if(btn1.innerHTML==btn5.innerHTML&&btn5.innerHTML==btn9.innerHTML&&btn1.innerHTML!=""){
        result()
    }
    else if(btn3.innerHTML==btn5.innerHTML&&btn5.innerHTML==btn7.innerHTML&&btn3.innerHTML!=""){
        result()
    }
}