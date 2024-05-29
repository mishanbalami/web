// loops

// for loops
// do while
// while

//syntax
for(let i=0; i<=10;i++){
    console.log(i)
}
for(let i=10; i>=0;i--){
    console.log(i)
}


let text = "hello world"

for(let i=0; i<= text.length -1;i++){
  if(i%2==0){
   console.log(text[i].toUpperCase())
  }else{
   console.log(text[i].toLowerCase())
  }
}

// write a function to calculate multiplication table of 5 5*1 =5
function multiplicationTable(a){
  let root =document.getElementById("root")
  for(i=1;i<=10;i++){
    root.innerHTML+=`<p>${a}*${i}=${a*i}</p>`
    }
}
multiplicationTable()

// write a function to find even numbers from 1 to 100
function evennumbers(a){
    for(i=1;i<=100;i++){
       if(i%2==0){
        console.log("Even Numbers",i)
    }
  }
}

evennumbers()



document.getElementById("root")
console.log(root)

