//What is an arrow function? It's basically a compact alternative to write a traditional function!

/*
const percent = (x,y) => x/y * 100

console.log(`${percent(50,489)}%`)

const greetings = (name) =>{ console.log(`Hello, ${name}`)}

greetings("Júlio César")
*/ 


//Students Grades

let grades = [100,50,80,94,12,45,68]

grades.sort((x,y) => x-y)
grades.forEach((element) => console.log(element))

grades.sort((x,y) => y - x)
grades.forEach((element) => console.log(element))