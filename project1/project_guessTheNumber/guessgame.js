

const number = parseInt(Math.random()*100 +1)
const submit = document.querySelector('.submit')
const guessno = document.querySelector('#inp')
const preno = document.querySelector(".prno")
const remno = document.querySelector('.rem')
let remguess = 10
let flag=0
 



console.log(number)
submit.addEventListener('click',function(e) {
    e.preventDefault()
const guessed_no = parseInt(guessno.value)
  console.log(guessed_no) 
   checkno(guessed_no)
})

function checkno(guessed_no){
     if( guessed_no > number){
        console.log("enter a smaller number")
        flag=1
        display(guessed_no)
        calculateguess(guessed_no)
        
     } else if ( guessed_no < number) {
        console.log("enter a bigger number")
        flag=2
        calculateguess(guessed_no)
      display(guessed_no)
     } else {
        endgame(guessed_no)
     }
}


function calculateguess(guessed_no){

}
function endgame(guessed_no){
    if( guessed_no == number){
        flag=3
        display(guessed_no)
        console.log(" you guessed right no");
        guessno.setAttribute('disable' , '')
    } else{
        flag = 4
        console.log("no guess remain you used 10 ");
        guessno.setAttribute('disable' , '')
    }
}

function calculateguess(guessed_no) {
    guessno.value = ''
    preno.innerHTML += `${guessed_no} `

    if(remguess < 0){
        endgame(guessed_no)
    }else{
        remguess--
    remno.innerHTML = `${remguess}`
    }
    }

    function display(guessed_no){
     const p = document.createElement('p')
    if (flag == 1) {
        document.querySelector('.main').appendChild(p)
        p.innerHTML = "enter a smaller number"
    }  if(flag == 2 ){
 document.querySelector('.main').appendChild(p)
        p.innerHTML = "enter a bigger number"
    } if(flag ==3) {
        document.querySelector('.main').appendChild(p)
        p.innerHTML = "you guessed right contratulations"
    } if (flag== 4){
        document.querySelector('.main').appendChild(p)
        p.innerHTML = "No guess remains you used all the 10"
    }
    }