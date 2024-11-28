//type conversion
let code = 9998
console.log(typeof(code))
let code2 = String(code)   //use capital latter for conversion like String,Number;
console.log(typeof(code2)) //is also gives NaN when a string converted to a number which is actually not a number
console.log(typeof(code))
console.log("2"+1)  // js auto convert number to string and give 21
console.log("2"+1+1)
console.log(2+1+"1")  // cant convert the last string to number
//comparision operator
console.log(null>0)
console.log(null==0)
console.log(null>=0)
// strict check ===
console.log("2"==2);
console.log("2"===2);
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// memory allocation
//stack (primitive data types)  and head (non primitive data type)
let name1 = "arpit"
let name2=name1;
name2="kumar"
console.log(name2)
console.log(name1) 
//for non primitive

let  obj= {
     mail : "232010@",
    Upi:"995630"
}

//let obj2 = Obj
//my_obj2.mail="231940@"
console.log(obj.mail);
//console.log(obj2.mail);

