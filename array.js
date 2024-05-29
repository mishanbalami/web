//syntax
//let array name = [123."123",boolean]0 1 2

let fruits = ['apple', 'banana', 'watermelon']
let meat = ['buff','chicken','pork']
console.log(fruits.length)
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])
console.log(fruits[fruits.length -1])
//elements add , remove

fruits.push('mangoes')
console.log(fruits)

fruits.pop()
console.log(fruits)
fruits[1]='mangoes'
console.log(fruits)
fruits.shift()
console.log(fruits)
fruits.unshift('banana')
console.log(fruits)

fruits.splice(0,2)
console.log(fruits) 

let meals = meat.concat(fruits)

console.log(meals)

let text1='hello'
let text2='world'
text1.concat(text2)
    
