const school = new Map([

    ["Julio", 552419],
    ["Rick", 123456],
    ["Mark", 456789],
    ["Angelina", 753159],

])

//What is Julio's enrollment number?
console.log(school.get("Julio"))

//Is there anyone name Francis?
console.log(school.has("Francis"))

//Hey we have a new student! Her name is Martha, and her enrollment number is 400289"
school.set("Martha", 400289)

school.forEach((enroll, name) => console.log(`${name} has the enrollment number as ${enroll}`))