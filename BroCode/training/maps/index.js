const store = new Map([
    ["T-Shirt", 20],
    ["Pants", 30],
    ["Belts", 5],
    ["Socks", 10]
])


//store.forEach(show)

store.forEach((value, key) => console.log(`${key} costs $${value}`))

function show(value, key){
    console.log(key+ ", " + "R$"+value)
}


/* 
    store.get("T-Shirt") => it returns the value associated


    store.set("Hat", 40) => it creats a new key with a value


    store.delete("Hat") => it deletes a key


    store.has("Underwear") => it returns a boolean value


    store.size => show how many items your object has


*/

