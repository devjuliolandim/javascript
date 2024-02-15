console.time("Response")

    const fatorial = 5
    let ans = 1


    for(let i = 1 ; i<=fatorial; i++){
        
        ans *= i
        
        
    }

    console.log(ans)

console.timeEnd("Response")