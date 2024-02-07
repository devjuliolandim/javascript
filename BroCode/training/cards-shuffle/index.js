let cards = Array.from(document.querySelectorAll('.cards'))

const audio = new Audio();
audio.src = "audio/shuffle.mp3"

document.getElementById('shuffle').addEventListener('click', function() {

    let deck = giveCardsInOrder()
    
    deck = shuffle(deck)

    for(let i = 0; i<13; i++){
        cards[i].innerHTML = "<img src = '"+ returnImgPath(deck[i])+"'>"
    }
    
});


function returnImgPath(value) {

    switch(value){
        case 'A':
            return 'images/cards/1.png'
        
        case 2:
            return 'images/cards/2.png'
            
        case 3:
            return 'images/cards/3.png'
           
        case 4:
            return 'images/cards/4.png'
            
        case 5:
            return 'images/cards/5.png'
           
        case 6:
            return 'images/cards/6.png'
           
        case 7:
            return 'images/cards/7.png'
           
        case 8:
            return 'images/cards/8.png'
           
        case 9:
            return 'images/cards/9.png'
                       
        case 10:
            return 'images/cards/10.png'
            
        case 'J':
            return 'images/cards/J.png'
          
        case 'Q':
            return 'images/cards/Q.png'
           
        case 'K':
            return 'images/cards/K.png'
      

    }

}


function giveCardsInOrder() {
    let newArray = []

    for(let i = 0; i<13;i++){
        if(i == 0){
            newArray[i] = "A"
        }else if(i > 0 && i<10){
            newArray[i] = (i+1)
        }else if(i==10){
            newArray[i] = "J"
        }else if(i==11){
            newArray[i] = "Q"
        }else{
            newArray[i] = "K"
        }
    }

    return newArray
}

function shuffle(cards){
    let numbersRandomized = []
    let shuffledNumbers = []

    for(let i = 0; i<13;i++){
        do{
            shuffledNumbers[i] = (Math.floor(Math.random() *13 +1))-1
        }while(isOnTheList(numbersRandomized, shuffledNumbers[i]))

        numbersRandomized.push(shuffledNumbers[i])
    }


    let shuffledCards = []

    for(let i = 0 ; i < 13; i++){
        shuffledCards[i] = cards[shuffledNumbers[i]]
    }

    cards = shuffledCards

    return cards
}

function isOnTheList(numbers, num){
    if(numbers.indexOf(num) == -1){
        return false
    }else{
        return true
    }
}

