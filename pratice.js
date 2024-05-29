// write a function to find largest number among three different numbers
function largestNumber(a,b,c){
    if(a>b && a>c){
        console.log('Largest Number',a)
    }else if(b>a & b>c){
        console.log("Largest Number",b)
    }else{
        console.log("Largest Number",c)
    }  
}
largestNumber(10,12,14)

function largest(a,b,c){
    if(a>b && a>c){
        return a
    }else if(b>a & b>c){
        return b
    }else{
        return c
    }
}


//WAF to find if given number is even or odd
function isEvenOdd(a){
    if(a%2==0){
        console.log('Even',a)
    }else{
        console.log('Odd',a)
    }
}
isEvenOdd(10)
isEvenOdd(11)
isEvenOdd(21)

//WAP to find if given number is divisible by 5 and is even


