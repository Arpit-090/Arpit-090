const calform =document.querySelector('.calform')
const calorielist = document.querySelector('.calorielist')
const totall =document.querySelector('.total')
// let calories = JSON.parse(localStorage.getItem('calorirelist')) || [];
let tot =0 

calform.addEventListener('submit',(e)=>{
    e.preventDefault();


    additem()
})


 const additem =function(){
    const li = document.createElement('li')
const fooditem = document.querySelector('#fooditem').value;
const date = document.querySelector('.date').value;
const calorie = document.querySelector('#calorie').value;
    li.innerHTML = `item added ${fooditem} contains ${calorie} on ${date} 
   <button class="del">DELETE</button>`;
    calorielist.appendChild(li)
// calculatig total

    tot += parseFloat(calorie);
console.log(tot)

    totall.innerText = tot.toFixed(2);
// set del button
    const delbutton = li.querySelector('.del')

    delbutton.addEventListener('click' , ()=>{
        li.remove()
    })
   calform.reset()
}