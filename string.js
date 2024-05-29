let name = "mishan"
let occupation =`lecturer`
let designation =`lead`

console.log(name.length)
console.log(occupation.length)
console.log(designation.length)
console.log(designation.trim().length)
console.log(occupation.toLowerCase())
console.log(occupation.toUpperCase())
console.log(designation.concat(occupation).concat(name).toUpperCase)
console.log(name.charAt(2))
console.log(designation.charAt(5))
console.log(occupation.charAt(4))
console.log(designation.toLowerCase().includes("lead"))




let text = "hello world"
         
console.log(text.length)
console.log(text[text.length -1]) 

//waf to count the number of spaces in a sentence

function countspace(sentence){
    let count =0
for(let i=0;i<=sentence.length-1;i++){

    if(sentence[i]=== " "){
        count = count +1
    }
}
console.log('number of space',count )
}
countspace('lorem ipsum is greater for calculating spaces.')