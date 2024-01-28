let pessoa = {
nome: "José",
sexo: "M",
peso: 88.1,
engordar(peso=0.5){
    this.peso += peso
}
}

pessoa.engordar(6)

console.log(pessoa.peso)