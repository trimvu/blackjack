

const deck = [
    { card: "two", suit: "clubs", value: 2, pic: 'images/2_of_clubs.png' },
    { card: "two", suit: "diamonds", value: 2, pic: 'images/2_of_diamonds.png' },
    { card: "two", suit: "hearts", value: 2, pic: 'images/2_of_hearts.png' },
    { card: "two", suit: "spades", value: 2, pic: 'images/2_of_spades.png' },
    { card: "three", suit: "clubs", value: 3, pic: 'images/3_of_clubs.png' },
    { card: "three", suit: "diamonds", value: 3, pic: 'images/3_of_diamonds.png' },
    { card: "three", suit: "hearts", value: 3, pic: 'images/3_of_hearts.png' },
    { card: "three", suit: "spades", value: 3, pic: 'images/3_of_spades.png' },
    { card: "four", suit: "clubs", value: 4, pic: 'images/4_of_clubs.png' },
    { card: "four", suit: "diamonds", value: 4, pic: 'images/4_of_diamonds.png' },
    { card: "four", suit: "hearts", value: 4, pic: 'images/4_of_hearts.png' },
    { card: "four", suit: "spades", value: 4, pic: 'images/4_of_spades.png' },
    { card: "five", suit: "clubs", value: 5, pic: 'images/5_of_clubs.png' },
    { card: "five", suit: "diamonds", value: 5, pic: 'images/5_of_diamonds.png' },
    { card: "five", suit: "hearts", value: 5, pic: 'images/5_of_hearts.png' },
    { card: "five", suit: "spades", value: 5, pic: 'images/5_of_spades.png' },
    { card: "six", suit: "clubs", value: 6, pic: 'images/6_of_clubs.png' },
    { card: "six", suit: "diamonds", value: 6, pic: 'images/6_of_diamonds.png' },
    { card: "six", suit: "hearts", value: 6, pic: 'images/6_of_hearts.png' },
    { card: "six", suit: "spades", value: 6, pic: 'images/6_of_spades.png' },
    { card: "seven", suit: "clubs", value: 7, pic: 'images/7_of_clubs.png' },
    { card: "seven", suit: "diamonds", value: 7, pic: 'images/7_of_diamonds.png' },
    { card: "seven", suit: "hearts", value: 7, pic: 'images/7_of_hearts.png' },
    { card: "seven", suit: "spades", value: 7, pic: 'images/7_of_spades.png' },
    { card: "eight", suit: "clubs", value: 8, pic: 'images/8_of_clubs.png' },
    { card: "eight", suit: "diamonds", value: 8, pic: 'images/8_of_diamonds.png' },
    { card: "eight", suit: "hearts", value: 8, pic: 'images/8_of_hearts.png' },
    { card: "eight", suit: "spades", value: 8, pic: 'images/8_of_spades.png' },
    { card: "nine", suit: "clubs", value: 9, pic: 'images/9_of_clubs.png' },
    { card: "nine", suit: "diamonds", value: 9, pic: 'images/9_of_diamonds.png' },
    { card: "nine", suit: "hearts", value: 9, pic: 'images/9_of_hearts.png' },
    { card: "nine", suit: "spades", value: 9, pic: 'images/9_of_spades.png' },
    { card: "ten", suit: "clubs", value: 10, pic: 'images/10_of_clubs.png' },
    { card: "ten", suit: "diamonds", value: 10, pic: 'images/10_of_diamonds.png' },
    { card: "ten", suit: "hearts", value: 10, pic: 'images/10_of_hearts.png' },
    { card: "ten", suit: "spades", value: 10, pic: 'images/10_of_spades.png' },
    { card: "jack", suit: "clubs", value: 10, pic: 'images/jack_of_clubs.png' },
    { card: "jack", suit: "diamonds", value: 10, pic: 'images/jack_of_diamonds.png' },
    { card: "jack", suit: "hearts", value: 10, pic: 'images/jack_of_hearts.png' },
    { card: "jack", suit: "spades", value: 10, pic: 'images/jack_of_spades.png' },
    { card: "queen", suit: "clubs", value: 10, pic: 'images/queen_of_clubs.png' },
    { card: "queen", suit: "diamonds", value: 10, pic: 'images/queen_of_diamonds.png' },
    { card: "queen", suit: "hearts", value: 10, pic: 'images/queen_of_hearts.png' },
    { card: "queen", suit: "spades", value: 10, pic: 'images/queen_of_spades.png' },
    { card: "king", suit: "clubs", value: 10, pic: 'images/king_of_clubs.png' },
    { card: "king", suit: "diamonds", value: 10, pic: 'images/king_of_diamonds.png' },
    { card: "king", suit: "hearts", value: 10, pic: 'images/king_of_hearts.png' },
    { card: "king", suit: "spades", value: 10, pic: 'images/king_of_spades.png' },
    { card: "ace", suit: "clubs", value: 1, pic: 'images/ace_of_clubs.png' },
    { card: "ace", suit: "diamonds", value: 1, pic: 'images/ace_of_diamonds.png' },
    { card: "ace", suit: "hearts", value: 1, pic: 'images/ace_of_hearts.png' },
    { card: "ace", suit: "spades", value: 1, pic: 'images/ace_of_spades.png' },
]

let shoe = [
    ...deck,
    ...deck,
    ...deck,
    ...deck,
    ...deck,
    ...deck,
]

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
}

shuffleArray(shoe)

let dealerHand = [];
let playerHand = [];

let pTotal = 0;
let dTotal = 0;
let facedown = ''

function dealerTotal(prev, curr) {
    return prev + curr;
}

function playerTotal(prev, curr) {
    return prev + curr;
}

let deal = document.getElementById('deal-button')
let hit = document.getElementById('hit-button')
let dHand = document.getElementById('dealer-hand')
let pHand = document.getElementById('player-hand')

function createpImage(link) {
    let element = document.createElement('img')
    element.setAttribute('src', link)
    pHand.appendChild(element)
}

function createdImage(link) {
    let element = document.createElement('img')
    element.setAttribute('src', link)
    dHand.appendChild(element)
}

function reveal(link) {
    dHand.removeChild(dHand.lastChild);
    createdImage(link)
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

var audio = new Audio('extras/Card-flip-sound-effect.mp3');

deal.addEventListener('click', ()=>{

    document.getElementById("doubledown-button").disabled = false;
    document.getElementById("surrender-button").disabled = false;
    document.getElementById("deal-button").disabled = true;
    document.getElementById("hit-button").disabled = false;
    document.getElementById("stand-button").disabled = false;

    // document.getElementById("hit-button").disabled = false;
    // document.getElementById("stand-button").disabled = false;

    // removeAllChildNodes(dHand)
    // removeAllChildNodes(pHand)
    // removeAllChildNodes(message)
    // dScore.innerText = ''

    // dealerHand = [];
    // playerHand = [];

    // dTotal = 0;
    // pTotal = 0;
    
    let deal1 = shoe.pop()
    playerHand.push(deal1.value)
    createpImage(deal1.pic)
    let deal2 = shoe.pop()
    dealerHand.push(deal2.value)
    createdImage(deal2.pic)
    let deal3 = shoe.pop()
    playerHand.push(deal3.value)
    createpImage(deal3.pic)
    let deal4 = shoe.pop()
    dealerHand.push(deal4.value)
    facedown = deal4.pic
    createdImage('images/facedown_card.png')

    audio.play();

    pTotal = playerHand.reduce(playerTotal, 0);
    dTotal = dealerHand.reduce(dealerTotal, 0)
    
    if (pTotal === 2) {
        pScore.innerText = pTotal
    }
    else if (playerHand.includes(1)) {
        pTotal += 10
        pScore.innerText = pTotal
    }
    else {
        pScore.innerText = pTotal
    }

    if (dTotal === 2) {
        dTotal
        // dScore.innerText = dTotal
        dScore.innerText = ''
    }
    else if (dealerHand.includes(1)) {
        dTotal += 10
        // dScore.innerText = dTotal
        dScore.innerText = ''
    }
    else {
        dTotal
        // dScore.innerText = dTotal
        dScore.innerText = ''
    }

    if (playerHand.includes(1) && playerHand.includes(10)) {
        message.innerText = "BLACKJACK!!"
        document.getElementById("hit-button").disabled = true;
        document.getElementById("stand-button").disabled = true;
        document.getElementById("surrender-button").disabled = true;
        document.getElementById("doubledown-button").disabled = true;
        document.getElementById("playagain-button").disabled = false;
        cash += (betAmt * (5/2))
        cashBtn.innerText = `Cash: ${cash}`
    }
    else if (dealerHand.includes(1) && dealerHand.includes(10)) {
        message.innerText = "DEALER BLACKJACK"
        document.getElementById("hit-button").disabled = true;
        document.getElementById("stand-button").disabled = true;
        document.getElementById("surrender-button").disabled = true;
        document.getElementById("doubledown-button").disabled = true;
        document.getElementById("playagain-button").disabled = false;
    }
    
})

hit.addEventListener('click', () => {
    document.getElementById("playagain-button").disabled = true;

    if (playerHand.length === 0) {
        
        message.innerText = "You can't hit yet."
    }
    else if (pTotal > 21) {
        
        message.innerText = "You already busted fool"
    }
    else if (pTotal == 21) {
        
        message.innerText = "You already have 21"
    }
    else {
        let draw1 = shoe.pop()
        playerHand.push(draw1.value)
        pTotal += draw1.value
        createpImage(draw1.pic)
        audio.play();
        document.getElementById("surrender-button").disabled = true;
        document.getElementById("doubledown-button").disabled = true;
    }

    if (playerHand.includes(1) && pTotal > 21) {
        pTotal -= 10
        pScore.innerText = pTotal
        document.getElementById("surrender-button").disabled = true;
        document.getElementById("doubledown-button").disabled = true;
    } else if (playerHand.includes(1) && pTotal === 11) {
        pTotal += 10
        pScore.innerText = pTotal
        document.getElementById("surrender-button").disabled = true;
        document.getElementById("doubledown-button").disabled = true;
    }

    // dScore.innerText = dTotal
    pScore.innerText = pTotal
})

let dScore = document.getElementById('dealer-points')
let pScore = document.getElementById('player-points')

let stand = document.getElementById('stand-button')

stand.addEventListener('click', ()=> {
    document.getElementById("hit-button").disabled = true;
    document.getElementById("deal-button").disabled = true;
    document.getElementById("doubledown-button").disabled = true;
    document.getElementById("stand-button").disabled = true;
    document.getElementById("surrender-button").disabled = true;
    document.getElementById("playagain-button").disabled = false;

    reveal(facedown)
    
    if (playerHand.length === 0) {
        
        message.innerText = "You can't stand yet."
    }
    else if (pTotal > 21) {
        message.innerText = "Bust."
    }
    else {
        while (dTotal < 17) {
            let draw1 = shoe.pop()
            dealerHand.push(draw1.value)
            createdImage(draw1.pic)
            audio.play();

            dTotal += draw1.value
            dScore.innerText = dTotal
        }

        if (dTotal == pTotal) {
            message.innerText = "Push"
            cash += betAmt
            cashBtn.innerText = `Cash: $${cash}`
        }
        else if (pTotal > 21) {
            message.innerText = "You busts"
        }
        else if (dTotal > 21) {
            message.innerText = "Dealer busts!"
            cash += (betAmt * 2)
            cashBtn.innerText = `Cash: $${cash}`
        }
        else if (dTotal > pTotal) {
            message.innerText = "House wins"
        } 
        else if (dTotal < pTotal) {
            message.innerText = "You win!"
            cash += (betAmt * 2)
            cashBtn.innerText = `Cash: $${cash}`
        }
        

    }
})

let message = document.getElementById('messages')

let money = document.getElementById('money')

let bet = document.getElementById('bet-button')

let cash = 500
let betAmt = 0

bet.addEventListener('click', ()=>{
    document.getElementById("deal-button").disabled = false;
    document.getElementById("hit-button").disabled = true;
    document.getElementById("stand-button").disabled = true;
    document.getElementById("bet-button").disabled = true;
    document.getElementById("surrender-button").disabled = true;
    document.getElementById("doubledown-button").disabled = true;
    document.getElementById("playagain-button").disabled = true;

    if (money.value === '$5') {
        cash -= 5
        betAmt += 5
        console.log(cash);
        cashBtn.innerText = `Cash: $${cash}`
        document.getElementById("bet-button").disabled = true;
    }
    else if (money.value === '$10') {
        cash -= 10
        betAmt += 10
        cashBtn.innerText = `Cash: ${cash}`
        document.getElementById("bet-button").disabled = true;
    }
    else if (money.value === '$25') {
        cash -= 25
        betAmt += 25
        cashBtn.innerText = `Cash: ${cash}`
        document.getElementById("bet-button").disabled = true;
    }
    else if (money.value === '$100') {
        cash -= 100
        betAmt += 100
        cashBtn.innerText = `Cash: ${cash}`
        document.getElementById("bet-button").disabled = true;
    }
})

let cashBtn = document.getElementById('cash')
cashBtn.innerText = `Cash: $${cash}`

let playagain = document.getElementById('playagain-button')

playagain.addEventListener('click', ()=>{ 

    document.getElementById("deal-button").disabled = true;
    document.getElementById("hit-button").disabled = true;
    document.getElementById("stand-button").disabled = true;
    document.getElementById("bet-button").disabled = false;
    document.getElementById("surrender-button").disabled = true;
    document.getElementById("doubledown-button").disabled = true;
    document.getElementById("playagain-button").disabled = true;

    removeAllChildNodes(dHand)
    removeAllChildNodes(pHand)
    removeAllChildNodes(message)
    // dScore.innerText = ''

    dealerHand = [];
    playerHand = [];

    dTotal = 0;
    pTotal = 0;

    betAmt = 0;
        
})

let surrender = document.getElementById('surrender-button')

surrender.addEventListener('click', () => {
    cash += (betAmt * 0.5)
    cashBtn.innerText = `Cash: ${cash}`
    document.getElementById("deal-button").disabled = true;
    document.getElementById("hit-button").disabled = true;
    document.getElementById("stand-button").disabled = true;
    document.getElementById("bet-button").disabled = true;
    document.getElementById("surrender-button").disabled = true;
    document.getElementById("doubledown-button").disabled = true;
    document.getElementById("playagain-button").disabled = false;
})

let double = document.getElementById('doubledown-button')

double.addEventListener('click', ()=> {
    cash -= betAmt;
    betAmt *= 2;
    let draw1 = shoe.pop()
    playerHand.push(draw1.value)
    pTotal += draw1.value
    createpImage(draw1.pic)
    pScore.innerText = pTotal
    audio.play();
    cashBtn.innerText = `Cash: ${cash}`
    document.getElementById("hit-button").disabled = true;
    document.getElementById("surrender-button").disabled = true;
    document.getElementById("doubledown-button").disabled = true;

    if (playerHand.includes(1) && pTotal === 11) {
        pTotal += 10
        pScore.innerText = pTotal
        document.getElementById("surrender-button").disabled = true;
        document.getElementById("doubledown-button").disabled = true;
    }

})

document.getElementById("doubledown-button").disabled = true;
document.getElementById("surrender-button").disabled = true;
document.getElementById("deal-button").disabled = true;
document.getElementById("hit-button").disabled = true;
document.getElementById("stand-button").disabled = true;
document.getElementById("playagain-button").disabled = true;