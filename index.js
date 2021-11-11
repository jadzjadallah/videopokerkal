var answer = prompt("Enter credit kal number:");
while (!/^[0-9]+$/.test(answer)) {
    alert("You did not enter a number.");
    answer = prompt("Enter a number: ");
}
let creditScore = document.getElementById("credit-score")
creditScore.innerText = answer.toString()

document.getElementById("btn-big").disabled = true;
document.getElementById("btn-small").disabled = true;
document.getElementById("btn-cancel-hold").disabled = true;
document.getElementById("btn-take-score").disabled = true;
document.getElementById("btn-double-up").disabled = true;
document.getElementById("btn-deal").disabled = true;

let counter = 0
let gamble = false
let firstRow = true
let actual = 0
let actualb = 0
let actuals = 0
let changeCard = 0

const deck_of_cards = ["ace_of_hearts","2_of_hearts","3_of_hearts","4_of_hearts","5_of_hearts","6_of_hearts",
"7_of_hearts","8_of_hearts","9_of_hearts","ten_of_hearts","jack_of_hearts","queen_of_hearts","king_of_hearts",
"ace_of_spades","2_of_spades","3_of_spades","4_of_spades","5_of_spades","6_of_spades",
"7_of_spades","8_of_spades","9_of_spades","ten_of_spades","jack_of_spades","queen_of_spades","king_of_spades",
"ace_of_diamonds","2_of_diamonds","3_of_diamonds","4_of_diamonds","5_of_diamonds","6_of_diamonds",
"7_of_diamonds","8_of_diamonds","9_of_diamonds","ten_of_diamonds","jack_of_diamonds","queen_of_diamonds","king_of_diamonds",
"ace_of_clubs","2_of_clubs","3_of_clubs","4_of_clubs","5_of_clubs","6_of_clubs",
"7_of_clubs","8_of_clubs","9_of_clubs","ten_of_clubs","jack_of_clubs","queen_of_clubs","king_of_clubs"]

const cancelHoldBtn = document.getElementById("btn-cancel-hold")
const stakeBtn = document.getElementById("btn-stake")
const dealBtn = document.getElementById("btn-deal")
const bigBtn = document.getElementById("btn-big")
const smallBtn = document.getElementById("btn-small")
const takeScoreBtn = document.getElementById("btn-take-score")
const doubleUpBtn = document.getElementById("btn-double-up")

const stakes = [250,300,500,1000]

let stakeScore = document.getElementById("stake-score")
let twoPairs = document.getElementById("two-show")
let threeOfaKind = document.getElementById("three-show")
let straight = document.getElementById("straight-show")
let flush = document.getElementById("flush-show")
let full = document.getElementById("fh-show")
let carre = document.getElementById("carre-show")
let sf = document.getElementById("sf-show")
let rf = document.getElementById("rf-show")


document.getElementById("card1").addEventListener("click", holdCardOne);
document.getElementById("card2").addEventListener("click", holdCardTwo);
document.getElementById("card3").addEventListener("click", holdCardThree);
document.getElementById("card4").addEventListener("click", holdCardFour);
document.getElementById("card5").addEventListener("click", holdCardFive);

function holdCardOne(){
    let one = document.getElementById('hold1');
    if (one.innerHTML === '')
    {document.getElementById('hold1').innerHTML += 'HOLD';}
    else {document.getElementById('hold1').innerText = '';}    
}

function holdCardTwo(){
    let two = document.getElementById('hold2');
    if (two.innerHTML === '')
        {document.getElementById('hold2').innerHTML += 'HOLD';}
    else {document.getElementById('hold2').innerText = '';}
}

function holdCardThree(){
    let three = document.getElementById('hold3');
    if (three.innerHTML === '')
        {document.getElementById('hold3').innerHTML += 'HOLD';}
     else {document.getElementById('hold3').innerText = '';}
}

function holdCardFour(){
    let four = document.getElementById('hold4');
    if (four.innerHTML === '')
        {document.getElementById('hold4').innerHTML += 'HOLD';}
    else {document.getElementById('hold4').innerText = '';}
}

function holdCardFive(){
    let five = document.getElementById('hold5');
    if (five.innerHTML === '')
        {document.getElementById('hold5').innerHTML += 'HOLD';}
    else {document.getElementById('hold5').innerText = '';}
}

cancelHoldBtn.addEventListener("click", function(){
    clearHold();
})

stakeBtn.addEventListener("click", function(){

    
    document.getElementById("btn-deal").disabled = false;
    document.getElementById("btn-cancel-hold").disabled = false;
    document.getElementById("btn-take-score").disabled = false;
    document.getElementById("btn-double-up").disabled = false;
    
    if (gamble === false){
        if(stakeScore.innerText === "0")
        {
            stakeScore.innerText = "250"
            changeScores()
        }
        else if (stakeScore.innerText === "1000")
        {
            stakeScore.innerText = "250"
            changeScores()
        }
        else {
            const indexOfStake = stakes.indexOf(parseInt(stakeScore.innerText));
            stakeScore.innerText = stakes[indexOfStake+1];
            changeScores()
        }
    }

    else if (firstRow === true){
        for(let i=1;i<=5;i++)
        {
            if(document.getElementById("hold"+ (i)).innerText === '')
            {actual = i;break;}
        }
        
        changeCard += 1
        if (changeCard <= 2)
        {
            let randomNumber = Math.floor(Math.random() * (52))
            document.getElementById("card" + (actual)).style.backgroundImage = 'url(./img/' + deck_of_cards[randomNumber] + '.png)'
        }
    }
    else if (firstRow === false){
        for(let i=1;i<=5;i++)
        {
            if(document.getElementById("hold"+ (i)).innerText === '')
            {actual = i;break;}
        }
        changeCard += 1
        if (changeCard <= 1)
        {
            let randomNumber = Math.floor(Math.random() * (52))
            document.getElementById("card" + (actual)).style.backgroundImage = 'url(./img/' + deck_of_cards[randomNumber] + '.png)'
        }
    }
    
})

bigBtn.addEventListener("click", async function(){ console.log(firstRow)
    doubleUpBtn.disabled = false;
    changeCard = 0;
    for(let i=1;i<=5;i++)
        {
            if(document.getElementById("hold"+ (i)).innerText === '')
            {
                actualb = i;
                break;
            }
        }
    
    document.getElementById("hold" + (actualb)).innerText = 'BIG'
    
    let randomNumber = Math.floor(Math.random() * (52))
    document.getElementById("card" + (actualb + 1)).style.backgroundImage = 'url(./img/' + deck_of_cards[randomNumber] + '.png)'

    let b;
    for(let x=1;x<=5;x++)
        {
            if(document.getElementById("hold"+ (x)).innerText === '')
            {
                b = x;
                break;
            }
        }
    
    let oldCard = (((document.getElementById("card"+ (b-1)).style.backgroundImage.toString().substring(11))).slice(0,-6)).substring(0,1)
    let newCard = (((document.getElementById("card"+ (b)).style.backgroundImage.toString().substring(11))).slice(0,-6)).substring(0,1) 

    let oldC;
    let newC;

    switch(oldCard){
        case "k":
            oldC = 13;
            break;
        case "q":
            oldC = 12;
            break;
        case "j":
            oldC = 11;
            break;
        case "t":
            oldC = 10;
            break;
        case "9":
            oldC = 9;
            break;
        case "8":
            oldC = 8;
            break;
        case "7":
            oldC = 7;
            break;
        case "6":
            oldC = 6;
            break;
        case "5":
            oldC = 5;
            break;
        case "4":
            oldC = 4;
            break;
        case "3":
            oldC = 3;
            break;
        case "2":
            oldC = 2;
            break;
        case "a":
            oldC = 1;
            break;
    }

        switch(newCard){
        case "k":
            newC = 13;
            break;
        case "q":
            newC = 12;
            break;
        case "j":
            newC = 11;
            break;
        case "t":
            newC = 10;
            break;
        case "9":
            newC = 9;
            break;
        case "8":
            newC = 8;
            break;
        case "7":
            newC = 7;
            break;
        case "6":
            newC = 6;
            break;
        case "5":
            newC = 5;
            break;
        case "4":
            newC = 4;
            break;
        case "3":
            newC = 3;
            break;
        case "2":
            newC = 2;
            break;
        case "a":
            newC = 1;
            break;
    }

    if((oldC <= newC)||(oldC === 1) ||(newC === 1)){
        doubleWin()
        if (b === 5)
        {
            testCheckResults()
            let lastCUrl = document.getElementById("card5").style.backgroundImage
            await new Promise(done => setTimeout(() => done(), 1000));
            document.getElementById("card1").style.backgroundImage = lastCUrl
            document.getElementById("card2").style.backgroundImage = 'none'
            document.getElementById("card3").style.backgroundImage = 'none'
            document.getElementById("card4").style.backgroundImage = 'none'
            document.getElementById("card5").style.backgroundImage = 'none'
            firstRow = false
            clearHold()
        }
    }
    else {
            if (document.getElementById("two-title").style.backgroundColor.toString() !== '')
            {
                document.getElementById("two-show").innerText = "0"
            }
            else if (document.getElementById("three-title").style.backgroundColor.toString() !== '')
            {
                document.getElementById("three-show").innerText = "0"
            }
            else if (document.getElementById("straight-title").style.backgroundColor.toString() !== '')
            {
                document.getElementById("straight-show").innerText = "0"
            }
            else if (document.getElementById("flush-title").style.backgroundColor.toString() !== '')
            {
                document.getElementById("flush-show").innerText = "0"
            }
            else if (document.getElementById("fh-title").style.backgroundColor.toString() !== '')
            {
                document.getElementById("fh-show").innerText = "0"
            }
            else if (document.getElementById("carre-title").style.backgroundColor.toString() !== '')
            {
                document.getElementById("carre-show").innerText = "0"
            }
            else if (document.getElementById("sf-title").style.backgroundColor.toString() !== '')
            {
                document.getElementById("sf-show").innerText = "0"
            }
            else if (document.getElementById("rf-title").style.backgroundColor.toString() !== '')
            {
                document.getElementById("rf-show").innerText = "0"
            }
        await new Promise(done => setTimeout(() => done(), 1000));
        backCards()
        clearHold()
        clearNames()
        changeScores()
        firstRow = true

        document.getElementById("btn-big").disabled = true;
        document.getElementById("btn-small").disabled = true;
        document.getElementById("btn-deal").disabled = false;
        document.getElementById("btn-cancel-hold").disabled = false;
        document.getElementById("btn-take-score").disabled = true;
        document.getElementById("btn-double-up").disabled = true;
    }
})

smallBtn.addEventListener("click", async function(){ console.log(firstRow)
    doubleUpBtn.disabled = false;
    changeCard = 0;
    for(let i=1;i<=5;i++)
        {
            if(document.getElementById("hold"+ (i)).innerText === '')
            {
                actuals = i;
                break;
            }
        }
    
    document.getElementById("hold" + (actuals)).innerText = 'SMALL'
    
    let randomNumber = Math.floor(Math.random() * (52))
    document.getElementById("card" + (actuals + 1)).style.backgroundImage = 'url(./img/' + deck_of_cards[randomNumber] + '.png)'

    let s;
    for(let x=1;x<=5;x++)
        {
            if(document.getElementById("hold"+ (x)).innerText === '')
            {
                s = x;
                break;
            }
        }
    
    let oldCard = (((document.getElementById("card"+ (s-1)).style.backgroundImage.toString().substring(11))).slice(0,-6)).substring(0,1)
    let newCard = (((document.getElementById("card"+ (s)).style.backgroundImage.toString().substring(11))).slice(0,-6)).substring(0,1)

    let oldC;
    let newC;

    switch(oldCard){
        case "k":
            oldC = 13;
            break;
        case "q":
            oldC = 12;
            break;
        case "j":
            oldC = 11;
            break;
        case "t":
            oldC = 10;
            break;
        case "9":
            oldC = 9;
            break;
        case "8":
            oldC = 8;
            break;
        case "7":
            oldC = 7;
            break;
        case "6":
            oldC = 6;
            break;
        case "5":
            oldC = 5;
            break;
        case "4":
            oldC = 4;
            break;
        case "3":
            oldC = 3;
            break;
        case "2":
            oldC = 2;
            break;
        case "a":
            oldC = 1;
            break;
    }

        switch(newCard){
        case "k":
            newC = 13;
            break;
        case "q":
            newC = 12;
            break;
        case "j":
            newC = 11;
            break;
        case "t":
            newC = 10;
            break;
        case "9":
            newC = 9;
            break;
        case "8":
            newC = 8;
            break;
        case "7":
            newC = 7;
            break;
        case "6":
            newC = 6;
            break;
        case "5":
            newC = 5;
            break;
        case "4":
            newC = 4;
            break;
        case "3":
            newC = 3;
            break;
        case "2":
            newC = 2;
            break;
        case "a":
            newC = 1;
            break;
    }

    if((oldC >= newC)||(oldC === 1) ||(newC === 1)){
        doubleWin()
        if (s === 5)
        {

            testCheckResults()
            let lastCUrl = document.getElementById("card5").style.backgroundImage
            await new Promise(done => setTimeout(() => done(), 1000));
            document.getElementById("card1").style.backgroundImage = lastCUrl
            document.getElementById("card2").style.backgroundImage = 'none'
            document.getElementById("card3").style.backgroundImage = 'none'
            document.getElementById("card4").style.backgroundImage = 'none'
            document.getElementById("card5").style.backgroundImage = 'none'
            firstRow = false
            clearHold()
        }
    }               
    else {
        if (document.getElementById("two-title").style.backgroundColor.toString() !== '')
        {
            document.getElementById("two-show").innerText = "0"
        }
        else if (document.getElementById("three-title").style.backgroundColor.toString() !== '')
        {
            document.getElementById("three-show").innerText = "0"
        }
        else if (document.getElementById("straight-title").style.backgroundColor.toString() !== '')
        {
            document.getElementById("straight-show").innerText = "0"
        }
        else if (document.getElementById("flush-title").style.backgroundColor.toString() !== '')
        {
            document.getElementById("flush-show").innerText = "0"
        }
        else if (document.getElementById("fh-title").style.backgroundColor.toString() !== '')
        {
            document.getElementById("fh-show").innerText = "0"
        }
        else if (document.getElementById("carre-title").style.backgroundColor.toString() !== '')
        {
            document.getElementById("carre-show").innerText = "0"
        }
        else if (document.getElementById("sf-title").style.backgroundColor.toString() !== '')
        {
            document.getElementById("sf-show").innerText = "0"
        }
        else if (document.getElementById("rf-title").style.backgroundColor.toString() !== '')
        {
            document.getElementById("rf-show").innerText = "0"
        }
        await new Promise(done => setTimeout(() => done(), 700));
        backCards()
        clearHold()
        clearNames()
        changeScores()
        firstRow = true

        document.getElementById("btn-big").disabled = true;
        document.getElementById("btn-small").disabled = true;
        document.getElementById("btn-deal").disabled = false;
        document.getElementById("btn-cancel-hold").disabled = false;
        document.getElementById("btn-take-score").disabled = true;
        document.getElementById("btn-double-up").disabled = true;
    }
})
function changeScores(){

    twoPairs.innerText = ((parseInt(stakeScore.innerText))*2).toString()
    threeOfaKind.innerText = ((parseInt(stakeScore.innerText))*3).toString()
    straight.innerText = ((parseInt(stakeScore.innerText))*5).toString()
    flush.innerText = ((parseInt(stakeScore.innerText))*7).toString()
    full.innerText = ((parseInt(stakeScore.innerText))*10).toString()
    carre.innerText = ((parseInt(stakeScore.innerText))*60).toString()
    sf.innerText = ((parseInt(stakeScore.innerText))*150).toString()
    rf.innerText = ((parseInt(stakeScore.innerText))*500).toString()
}

function clearHold(){
    document.getElementById('hold1').innerText = '';
    document.getElementById('hold2').innerText = '';
    document.getElementById('hold3').innerText = '';
    document.getElementById('hold4').innerText = '';
    document.getElementById('hold5').innerText = '';
}

dealBtn.addEventListener("click",async function(){

    document.getElementById("btn-double-up").disabled = false;

    let fhIncentive = Math.floor(Math.random() * 50) + 1
    let carreIncentive = Math.floor(Math.random() * 6) + 4 ;
    let leftOrRight = Math.floor(Math.random() * 2) + 1;
    let newArray = deck_of_cards
    let tempArray = []
    let randomNumber = 0
    let oldCredit = parseInt(creditScore.innerText)
    let stake = parseInt(stakeScore.innerText)
    if (counter === 0)
    {   
        document.getElementById("fh-bonus").innerText = ((parseInt(document.getElementById("fh-bonus").innerText)+(fhIncentive))).toString()

        if (leftOrRight === 1)
        {document.getElementById("left-bc").innerText = ((parseInt(document.getElementById("left-bc").innerText)+(carreIncentive))).toString()}
        else {document.getElementById("right-bc").innerText = ((parseInt(document.getElementById("right-bc").innerText)+(carreIncentive))).toString()}

        if (stake <= oldCredit)
        {document.getElementById("credit-score").innerText = (oldCredit-stake).toString()}
        else if ((stake > oldCredit)&&(oldCredit !== 0)){
            twoPairs.innerText = ((parseInt(creditScore.innerText))*2).toString()
            threeOfaKind.innerText = ((parseInt(creditScore.innerText))*3).toString()
            straight.innerText = ((parseInt(creditScore.innerText))*5).toString()
            flush.innerText = ((parseInt(creditScore.innerText))*7).toString()
            full.innerText = ((parseInt(creditScore.innerText))*10).toString()
            carre.innerText = ((parseInt(creditScore.innerText))*60).toString()
            sf.innerText = ((parseInt(creditScore.innerText))*150).toString()
            rf.innerText = ((parseInt(creditScore.innerText))*500).toString()
            document.getElementById("credit-score").textContent = "0"
        }
        else{
            $("input[type=button]").attr("disabled", "disabled");
            alert("KAL OVER")
        }
        clearHold()
        for(let i=0;i<5;i++)
        {document.getElementById("card"+ (i+1)).style.backgroundImage = 'url(./img/back.png)'}
         for(let i=0;i<5;i++)
                {  
                    randomNumber = Math.floor(Math.random() * (52-i))
                    await new Promise(done => setTimeout(() => done(), 100*i));
                    document.getElementById("card"+ (i+1)).style.backgroundImage = 'url(./img/' + newArray[randomNumber] + '.png)'

                    newArray = newArray.filter((_, i) => i !== randomNumber);
                }
        
       
        counter += 1
    }
    else if (counter === 1)
    {
        
        for(let i=0;i<5;i++)
        {
            tempArray.push(((document.getElementById("card"+ (i+1)).style.backgroundImage.toString().substring(11))).slice(0,-6))
        }
        let difference = deck_of_cards.filter(x => !tempArray.includes(x));
        
        for(let i=0;i<5;i++)
        {
            if(document.getElementById("hold"+ (i+1)).textContent !== "HOLD"){
                document.getElementById("card"+ (i+1)).style.backgroundImage = 'url(./img/back.png)'
            }
        }    

        for(let i=0;i<5;i++)
        {
            if(document.getElementById("hold"+ (i+1)).textContent !== "HOLD")
            {
                await new Promise(done => setTimeout(() => done(), 100*i));
                randomNumber = Math.floor(Math.random() * ((difference.length-1)-i))
                document.getElementById("card"+ (i+1)).style.backgroundImage = 'url(./img/' + difference[randomNumber] + '.png)'
                difference = difference.filter((_, i) => i !== randomNumber);
            }
        }
        checkResults()    
        counter -= 1 
    }   
})

takeScoreBtn.addEventListener("click",async function(){
    let wins = 0

    if (document.getElementById("two-title").style.backgroundColor.toString() !== '')
        {
            wins = parseInt(document.getElementById("two-show").textContent)
            if (wins % 1000 === 0){
                for(i=1;i<=wins/1000;i++)
                {
                    await new Promise(done => setTimeout(() => done(), 0.1));
                    document.getElementById("credit-score").textContent = (parseInt(document.getElementById("credit-score").textContent) + 1000).toString()
                    document.getElementById("flush-show").textContent = (parseInt(document.getElementById("flush-show").textContent) - 1000).toString()
                }
            }
            else if (wins % 500 === 0){
                for(i=1;i<=wins/500;i++)
                {
                    await new Promise(done => setTimeout(() => done(), 0.1));
                    document.getElementById("credit-score").textContent = (parseInt(document.getElementById("credit-score").textContent) + 500).toString()
                    document.getElementById("two-show").textContent = (parseInt(document.getElementById("two-show").textContent) - 500).toString()
                }
            }
            else if (wins % 250 === 0){
                for(i=1;i<=wins/250;i++)
                {
                    await new Promise(done => setTimeout(() => done(), 0.1));
                    document.getElementById("credit-score").textContent = (parseInt(document.getElementById("credit-score").textContent) + 250).toString()
                    document.getElementById("two-show").textContent = (parseInt(document.getElementById("two-show").textContent) - 250).toString()
                }
            }
            else if (wins % 100 === 0){
                for(i=1;i<=wins/100;i++)
                {
                    await new Promise(done => setTimeout(() => done(), 0.1));
                    document.getElementById("credit-score").textContent = (parseInt(document.getElementById("credit-score").textContent) + 100).toString()
                    document.getElementById("two-show").textContent = (parseInt(document.getElementById("two-show").textContent) - 100).toString()
                }
            }
            else if (wins % 50 === 0){
                for(i=1;i<=wins/50;i++)
                {
                    await new Promise(done => setTimeout(() => done(), 0.1));
                    document.getElementById("credit-score").textContent = (parseInt(document.getElementById("credit-score").textContent) + 50).toString()
                    document.getElementById("two-show").textContent = (parseInt(document.getElementById("two-show").textContent) - 50).toString()
                }
            }
            else if (wins % 25 === 0){
                for(i=1;i<=wins/25;i++)
                {
                    await new Promise(done => setTimeout(() => done(), 0.1));
                    document.getElementById("credit-score").textContent = (parseInt(document.getElementById("credit-score").textContent) + 25).toString()
                    document.getElementById("two-show").textContent = (parseInt(document.getElementById("two-show").textContent) - 25).toString()
                }
            }
        }
    else if (document.getElementById("three-title").style.backgroundColor.toString() !== '')
        {
            wins = parseInt(document.getElementById("three-show").textContent)
            if (wins % 1000 === 0){
                for(i=1;i<=wins/1000;i++)
                {
                    await new Promise(done => setTimeout(() => done(), 0.1));
                    document.getElementById("credit-score").textContent = (parseInt(document.getElementById("credit-score").textContent) + 1000).toString()
                    document.getElementById("three-show").textContent = (parseInt(document.getElementById("three-show").textContent) - 1000).toString()
                }
            }
            else if (wins % 500 === 0){
                for(i=1;i<=wins/500;i++)
                {
                    await new Promise(done => setTimeout(() => done(), 0.1));
                    document.getElementById("credit-score").textContent = (parseInt(document.getElementById("credit-score").textContent) + 500).toString()
                    document.getElementById("three-show").textContent = (parseInt(document.getElementById("three-show").textContent) - 500).toString()
                }
            }
            else if (wins % 250 === 0){
                for(i=1;i<=wins/250;i++)
                {
                    await new Promise(done => setTimeout(() => done(), 0.1));
                    document.getElementById("credit-score").textContent = (parseInt(document.getElementById("credit-score").textContent) + 250).toString()
                    document.getElementById("three-show").textContent = (parseInt(document.getElementById("three-show").textContent) - 250).toString()
                }
            }
            else if (wins % 100 === 0){
                for(i=1;i<=wins/100;i++)
                {
                    await new Promise(done => setTimeout(() => done(), 0.1));
                    document.getElementById("credit-score").textContent = (parseInt(document.getElementById("credit-score").textContent) + 100).toString()
                    document.getElementById("three-show").textContent = (parseInt(document.getElementById("three-show").textContent) - 100).toString()
                }
            }
            else if (wins % 50 === 0){
                for(i=1;i<=wins/50;i++)
                {
                    await new Promise(done => setTimeout(() => done(), 0.1));
                    document.getElementById("credit-score").textContent = (parseInt(document.getElementById("credit-score").textContent) + 50).toString()
                    document.getElementById("three-show").textContent = (parseInt(document.getElementById("three-show").textContent) - 50).toString()
                }
            }
            else if (wins % 25 === 0){
                for(i=1;i<=wins/25;i++)
                {
                    await new Promise(done => setTimeout(() => done(), 0.1));
                    document.getElementById("credit-score").textContent = (parseInt(document.getElementById("credit-score").textContent) + 25).toString()
                    document.getElementById("three-show").textContent = (parseInt(document.getElementById("three-show").textContent) - 25).toString()
                }
            } 
        }
    else if (document.getElementById("straight-title").style.backgroundColor.toString() !== '')
        {
            wins = parseInt(document.getElementById("straight-show").textContent)
            if (wins % 1000 === 0){
                for(i=1;i<=wins/1000;i++)
                {
                    await new Promise(done => setTimeout(() => done(), 0.1));
                    document.getElementById("credit-score").textContent = (parseInt(document.getElementById("credit-score").textContent) + 1000).toString()
                    document.getElementById("straight-show").textContent = (parseInt(document.getElementById("straight-show").textContent) - 1000).toString()
                }
            }
            else if (wins % 500 === 0){
                for(i=1;i<=wins/500;i++)
                {
                    await new Promise(done => setTimeout(() => done(), 0.1));
                    document.getElementById("credit-score").textContent = (parseInt(document.getElementById("credit-score").textContent) + 500).toString()
                    document.getElementById("straight-show").textContent = (parseInt(document.getElementById("straight-show").textContent) - 500).toString()
                }
            }
            else if (wins % 250 === 0){
                for(i=1;i<=wins/250;i++)
                {
                    await new Promise(done => setTimeout(() => done(), 0.1));
                    document.getElementById("credit-score").textContent = (parseInt(document.getElementById("credit-score").textContent) + 250).toString()
                    document.getElementById("straight-show").textContent = (parseInt(document.getElementById("straight-show").textContent) - 250).toString()
                }
            }
            else if (wins % 100 === 0){
                for(i=1;i<=wins/100;i++)
                {
                    await new Promise(done => setTimeout(() => done(), 0.1));
                    document.getElementById("credit-score").textContent = (parseInt(document.getElementById("credit-score").textContent) + 100).toString()
                    document.getElementById("straight-show").textContent = (parseInt(document.getElementById("straight-show").textContent) - 100).toString()
                }
            }
            else if (wins % 50 === 0){
                for(i=1;i<=wins/50;i++)
                {
                    await new Promise(done => setTimeout(() => done(), 0.1));
                    document.getElementById("credit-score").textContent = (parseInt(document.getElementById("credit-score").textContent) + 50).toString()
                    document.getElementById("straight-show").textContent = (parseInt(document.getElementById("straight-show").textContent) - 50).toString()
                }
            }
            else if (wins % 25 === 0){
                for(i=1;i<=wins/25;i++)
                {
                    await new Promise(done => setTimeout(() => done(), 0.1));
                    document.getElementById("credit-score").textContent = (parseInt(document.getElementById("credit-score").textContent) + 25).toString()
                    document.getElementById("straight-show").textContent = (parseInt(document.getElementById("straight-show").textContent) - 25).toString()
                }
            }  
        }
    else if (document.getElementById("flush-title").style.backgroundColor.toString() !== '')
        {
            wins = parseInt(document.getElementById("flush-show").textContent)
            if (wins % 1000 === 0){
                for(i=1;i<=wins/1000;i++)
                {
                    await new Promise(done => setTimeout(() => done(), 0.1));
                    document.getElementById("credit-score").textContent = (parseInt(document.getElementById("credit-score").textContent) + 1000).toString()
                    document.getElementById("flush-show").textContent = (parseInt(document.getElementById("flush-show").textContent) - 1000).toString()
                }
            }
            else if (wins % 500 === 0){
                for(i=1;i<=wins/500;i++)
                {
                    await new Promise(done => setTimeout(() => done(), 0.1));
                    document.getElementById("credit-score").textContent = (parseInt(document.getElementById("credit-score").textContent) + 500).toString()
                    document.getElementById("flush-show").textContent = (parseInt(document.getElementById("flush-show").textContent) - 500).toString()
                }
            }
            else if (wins % 250 === 0){
                for(i=1;i<=wins/250;i++)
                {
                    await new Promise(done => setTimeout(() => done(), 0.1));
                    document.getElementById("credit-score").textContent = (parseInt(document.getElementById("credit-score").textContent) + 250).toString()
                    document.getElementById("flush-show").textContent = (parseInt(document.getElementById("flush-show").textContent) - 250).toString()
                }
            }
            else if (wins % 100 === 0){
                for(i=1;i<=wins/100;i++)
                {
                    await new Promise(done => setTimeout(() => done(), 0.1));
                    document.getElementById("credit-score").textContent = (parseInt(document.getElementById("credit-score").textContent) + 100).toString()
                    document.getElementById("flush-show").textContent = (parseInt(document.getElementById("flush-show").textContent) - 100).toString()
                }
            }
            else if (wins % 50 === 0){
                for(i=1;i<=wins/50;i++)
                {
                    await new Promise(done => setTimeout(() => done(), 0.1));
                    document.getElementById("credit-score").textContent = (parseInt(document.getElementById("credit-score").textContent) + 50).toString()
                    document.getElementById("flush-show").textContent = (parseInt(document.getElementById("flush-show").textContent) - 50).toString()
                }
            }
            else if (wins % 25 === 0){
                for(i=1;i<=wins/25;i++)
                {
                    await new Promise(done => setTimeout(() => done(), 0.1));
                    document.getElementById("credit-score").textContent = (parseInt(document.getElementById("credit-score").textContent) + 25).toString()
                    document.getElementById("flush-show").textContent = (parseInt(document.getElementById("flush-show").textContent) - 25).toString()
                }
            }  
        }
    else if (document.getElementById("fh-title").style.backgroundColor.toString() !== '')
        {
            wins = parseInt(document.getElementById("fh-show").textContent)
            if (wins % 1000 === 0){
                for(i=1;i<=wins/1000;i++)
                {
                    await new Promise(done => setTimeout(() => done(), 0.1));
                    document.getElementById("credit-score").textContent = (parseInt(document.getElementById("credit-score").textContent) + 1000).toString()
                    document.getElementById("fh-show").textContent = (parseInt(document.getElementById("fh-show").textContent) - 1000).toString()
                }
            }
            else if (wins % 500 === 0){
                for(i=1;i<=wins/500;i++)
                {
                    await new Promise(done => setTimeout(() => done(), 0.1));
                    document.getElementById("credit-score").textContent = (parseInt(document.getElementById("credit-score").textContent) + 500).toString()
                    document.getElementById("fh-show").textContent = (parseInt(document.getElementById("fh-show").textContent) - 500).toString()
                }
            }
            else if (wins % 250 === 0){
                for(i=1;i<=wins/250;i++)
                {
                    await new Promise(done => setTimeout(() => done(), 0.1));
                    document.getElementById("credit-score").textContent = (parseInt(document.getElementById("credit-score").textContent) + 250).toString()
                    document.getElementById("fh-show").textContent = (parseInt(document.getElementById("fh-show").textContent) - 250).toString()
                }
            }
            else if (wins % 100 === 0){
                for(i=1;i<=wins/100;i++)
                {
                    await new Promise(done => setTimeout(() => done(), 0.1));
                    document.getElementById("credit-score").textContent = (parseInt(document.getElementById("credit-score").textContent) + 100).toString()
                    document.getElementById("fh-show").textContent = (parseInt(document.getElementById("fh-show").textContent) - 100).toString()
                }
            }
            else if (wins % 50 === 0){
                for(i=1;i<=wins/50;i++)
                {
                    await new Promise(done => setTimeout(() => done(), 0.1));
                    document.getElementById("credit-score").textContent = (parseInt(document.getElementById("credit-score").textContent) + 50).toString()
                    document.getElementById("fh-show").textContent = (parseInt(document.getElementById("fh-show").textContent) - 50).toString()
                }
            }
            else if (wins % 25 === 0){
                for(i=1;i<=wins/25;i++)
                {
                    await new Promise(done => setTimeout(() => done(), 0.1));
                    document.getElementById("credit-score").textContent = (parseInt(document.getElementById("credit-score").textContent) + 25).toString()
                    document.getElementById("fh-show").textContent = (parseInt(document.getElementById("fh-show").textContent) - 25).toString()
                }
            }   
        }
    else if (document.getElementById("carre-title").style.backgroundColor.toString() !== '')
        {
            wins = parseInt(document.getElementById("carre-show").textContent)
            if (wins % 1000 === 0){
                for(i=1;i<=wins/1000;i++)
                {
                    await new Promise(done => setTimeout(() => done(), 0.1));
                    document.getElementById("credit-score").textContent = (parseInt(document.getElementById("credit-score").textContent) + 1000).toString()
                    document.getElementById("carre-show").textContent = (parseInt(document.getElementById("carre-show").textContent) - 1000).toString()
                }
            }
            else if (wins % 500 === 0){
                for(i=1;i<=wins/500;i++)
                {
                    await new Promise(done => setTimeout(() => done(), 0.1));
                    document.getElementById("credit-score").textContent = (parseInt(document.getElementById("credit-score").textContent) + 500).toString()
                    document.getElementById("carre-show").textContent = (parseInt(document.getElementById("carre-show").textContent) - 500).toString()
                }
            }
            else if (wins % 250 === 0){
                for(i=1;i<=wins/250;i++)
                {
                    await new Promise(done => setTimeout(() => done(), 0.1));
                    document.getElementById("credit-score").textContent = (parseInt(document.getElementById("credit-score").textContent) + 250).toString()
                    document.getElementById("carre-show").textContent = (parseInt(document.getElementById("carre-show").textContent) - 250).toString()
                }
            }
            else if (wins % 100 === 0){
                for(i=1;i<=wins/100;i++)
                {
                    await new Promise(done => setTimeout(() => done(), 0.1));
                    document.getElementById("credit-score").textContent = (parseInt(document.getElementById("credit-score").textContent) + 100).toString()
                    document.getElementById("carre-show").textContent = (parseInt(document.getElementById("carre-show").textContent) - 100).toString()
                }
            }
            else if (wins % 50 === 0){
                for(i=1;i<=wins/50;i++)
                {
                    await new Promise(done => setTimeout(() => done(), 0.1));
                    document.getElementById("credit-score").textContent = (parseInt(document.getElementById("credit-score").textContent) + 50).toString()
                    document.getElementById("carre-show").textContent = (parseInt(document.getElementById("carre-show").textContent) - 50).toString()
                }
            }
            else if (wins % 25 === 0){
                for(i=1;i<=wins/25;i++)
                {
                    await new Promise(done => setTimeout(() => done(), 0.1));
                    document.getElementById("credit-score").textContent = (parseInt(document.getElementById("credit-score").textContent) + 25).toString()
                    document.getElementById("carre-show").textContent = (parseInt(document.getElementById("carre-show").textContent) - 25).toString()
                }
            }   
        }
    else if (document.getElementById("sf-title").style.backgroundColor.toString() !== '')
        {
            wins = parseInt(document.getElementById("sf-show").textContent)
            if (wins % 1000 === 0){
                for(i=1;i<=wins/1000;i++)
                {
                    await new Promise(done => setTimeout(() => done(), 0.1));
                    document.getElementById("credit-score").textContent = (parseInt(document.getElementById("credit-score").textContent) + 1000).toString()
                    document.getElementById("sf-show").textContent = (parseInt(document.getElementById("sf-show").textContent) - 1000).toString()
                }
            }
            else if (wins % 500 === 0){
                for(i=1;i<=wins/500;i++)
                {
                    await new Promise(done => setTimeout(() => done(), 0.1));
                    document.getElementById("credit-score").textContent = (parseInt(document.getElementById("credit-score").textContent) + 500).toString()
                    document.getElementById("sf-show").textContent = (parseInt(document.getElementById("sf-show").textContent) - 500).toString()
                }
            }
            else if (wins % 250 === 0){
                for(i=1;i<=wins/250;i++)
                {
                    await new Promise(done => setTimeout(() => done(), 0.1));
                    document.getElementById("credit-score").textContent = (parseInt(document.getElementById("credit-score").textContent) + 250).toString()
                    document.getElementById("sf-show").textContent = (parseInt(document.getElementById("sf-show").textContent) - 250).toString()
                }
            }
            else if (wins % 100 === 0){
                for(i=1;i<=wins/100;i++)
                {
                    await new Promise(done => setTimeout(() => done(), 0.1));
                    document.getElementById("credit-score").textContent = (parseInt(document.getElementById("credit-score").textContent) + 100).toString()
                    document.getElementById("sf-show").textContent = (parseInt(document.getElementById("sf-show").textContent) - 100).toString()
                }
            }
            else if (wins % 50 === 0){
                for(i=1;i<=wins/50;i++)
                {
                    await new Promise(done => setTimeout(() => done(), 0.1));
                    document.getElementById("credit-score").textContent = (parseInt(document.getElementById("credit-score").textContent) + 50).toString()
                    document.getElementById("sf-show").textContent = (parseInt(document.getElementById("sf-show").textContent) - 50).toString()
                }
            }
            else if (wins % 25 === 0){
                for(i=1;i<=wins/25;i++)
                {
                    await new Promise(done => setTimeout(() => done(), 0.1));
                    document.getElementById("credit-score").textContent = (parseInt(document.getElementById("credit-score").textContent) + 25).toString()
                    document.getElementById("sf-show").textContent = (parseInt(document.getElementById("sf-show").textContent) - 25).toString()
                }
            }   
        }
    else if (document.getElementById("rf-title").style.backgroundColor.toString() !== '')
        {
            wins = parseInt(document.getElementById("rf-show").textContent)
            if (wins % 1000 === 0){
                for(i=1;i<=wins/1000;i++)
                {
                    await new Promise(done => setTimeout(() => done(), 0.1));
                    document.getElementById("credit-score").textContent = (parseInt(document.getElementById("credit-score").textContent) + 1000).toString()
                    document.getElementById("rf-show").textContent = (parseInt(document.getElementById("rf-show").textContent) - 1000).toString()
                }
            }
            else if (wins % 500 === 0){
                for(i=1;i<=wins/500;i++)
                {
                    await new Promise(done => setTimeout(() => done(), 0.1));
                    document.getElementById("credit-score").textContent = (parseInt(document.getElementById("credit-score").textContent) + 500).toString()
                    document.getElementById("rf-show").textContent = (parseInt(document.getElementById("rf-show").textContent) - 500).toString()
                }
            }
            else if (wins % 250 === 0){
                for(i=1;i<=wins/250;i++)
                {
                    await new Promise(done => setTimeout(() => done(), 0.1));
                    document.getElementById("credit-score").textContent = (parseInt(document.getElementById("credit-score").textContent) + 250).toString()
                    document.getElementById("rf-show").textContent = (parseInt(document.getElementById("rf-show").textContent) - 250).toString()
                }
            }
            else if (wins % 100 === 0){
                for(i=1;i<=wins/100;i++)
                {
                    await new Promise(done => setTimeout(() => done(), 0.1));
                    document.getElementById("credit-score").textContent = (parseInt(document.getElementById("credit-score").textContent) + 100).toString()
                    document.getElementById("rf-show").textContent = (parseInt(document.getElementById("rf-show").textContent) - 100).toString()
                }
            }
            else if (wins % 50 === 0){
                for(i=1;i<=wins/50;i++)
                {
                    await new Promise(done => setTimeout(() => done(), 0.1));
                    document.getElementById("credit-score").textContent = (parseInt(document.getElementById("credit-score").textContent) + 50).toString()
                    document.getElementById("rf-show").textContent = (parseInt(document.getElementById("rf-show").textContent) - 50).toString()
                }
            }
            else if (wins % 25 === 0){
                for(i=1;i<=wins/25;i++)
                {
                    await new Promise(done => setTimeout(() => done(), 0.1));
                    document.getElementById("credit-score").textContent = (parseInt(document.getElementById("credit-score").textContent) + 25).toString()
                    document.getElementById("rf-show").textContent = (parseInt(document.getElementById("rf-show").textContent) - 25).toString()
                }
            }   
        }
    await new Promise(done => setTimeout(() => done(), 1000));
    backCards()
    clearHold()
    clearNames()
    changeScores()
})

doubleUpBtn.addEventListener("click",async function(){
    
    doubleUpBtn.disabled = true;

    if (document.getElementById("two-title").style.backgroundColor.toString() !== '')
    {
        document.getElementById("credit-score").textContent = ((parseInt(document.getElementById("credit-score").textContent)) + ((parseInt(document.getElementById("two-show").textContent))/2)).toString()
        document.getElementById("two-show").textContent = ((parseInt(document.getElementById("two-show").textContent))/2).toString()
    }
    else if (document.getElementById("three-title").style.backgroundColor.toString() !== '')
    {
        document.getElementById("credit-score").textContent = ((parseInt(document.getElementById("credit-score").textContent)) + ((parseInt(document.getElementById("three-show").textContent))/2)).toString()
        document.getElementById("three-show").textContent = ((parseInt(document.getElementById("three-show").textContent))/2).toString()
    }
    else if (document.getElementById("straight-title").style.backgroundColor.toString() !== '')
    {
        document.getElementById("credit-score").textContent = ((parseInt(document.getElementById("credit-score").textContent)) + ((parseInt(document.getElementById("straight-show").textContent))/2)).toString()
        document.getElementById("straight-show").textContent = ((parseInt(document.getElementById("straight-show").textContent))/2).toString()
    }
    else if (document.getElementById("flush-title").style.backgroundColor.toString() !== '')
    {
        document.getElementById("credit-score").textContent = ((parseInt(document.getElementById("credit-score").textContent)) + ((parseInt(document.getElementById("flush-show").textContent))/2)).toString()
        document.getElementById("flush-show").textContent = ((parseInt(document.getElementById("flush-show").textContent))/2).toString()
    }
    else if (document.getElementById("fh-title").style.backgroundColor.toString() !== '')
    {
        document.getElementById("credit-score").textContent = ((parseInt(document.getElementById("credit-score").textContent)) + ((parseInt(document.getElementById("fh-show").textContent))/2)).toString()
        document.getElementById("fh-show").textContent = ((parseInt(document.getElementById("fh-show").textContent))/2).toString()
    }
    else if (document.getElementById("carre-title").style.backgroundColor.toString() !== '')
    {
        document.getElementById("credit-score").textContent = ((parseInt(document.getElementById("credit-score").textContent)) + ((parseInt(document.getElementById("carre-show").textContent))/2)).toString()
        document.getElementById("carre-show").textContent = ((parseInt(document.getElementById("carre-show").textContent))/2).toString()
    }
    else if (document.getElementById("sf-title").style.backgroundColor.toString() !== '')
    {
        document.getElementById("credit-score").textContent = ((parseInt(document.getElementById("credit-score").textContent)) + ((parseInt(document.getElementById("sf-show").textContent))/2)).toString()
        document.getElementById("sf-show").textContent = ((parseInt(document.getElementById("sf-show").textContent))/2).toString()
    }
    else if (document.getElementById("rf-title").style.backgroundColor.toString() !== '')
    {
        document.getElementById("credit-score").textContent = ((parseInt(document.getElementById("credit-score").textContent)) + ((parseInt(document.getElementById("rf-show").textContent))/2)).toString()
        document.getElementById("rf-show").textContent = ((parseInt(document.getElementById("rf-show").textContent))/2).toString()
    }
})

async function checkResults(){

    // document.getElementById("card1").style.backgroundImage = 'url(./img/king_of_hearts.png)'
    // document.getElementById("card2").style.backgroundImage = 'url(./img/king_of_spades.png)'
    // document.getElementById("card3").style.backgroundImage = 'url(./img/king_of_clubs.png)'
    // document.getElementById("card4").style.backgroundImage = 'url(./img/9_of_clubs.png)'
    // document.getElementById("card5").style.backgroundImage = 'url(./img/9_of_hearts.png)'

    let resultArray=[]
    let numArray = []
    let kindArray = []
    let straight = false
    let fullArray = []
    let sum = 0

    for(let i=0;i<5;i++)
    {
        resultArray.push(((document.getElementById("card"+ (i+1)).style.backgroundImage.toString().substring(11))).slice(0,-6))
    }

    for(let i=0;i<5;i++)
    {
        numArray.push(resultArray[i].substring(0,1))
        kindArray.push(resultArray[i].split('_').pop())
    }

    if ((numArray.includes('a'))&&(numArray.includes('k'))&&(numArray.includes('q'))&&(numArray.includes('j'))&&(numArray.includes('t')))
    {straight = true}
    if ((numArray.includes('9'))&&(numArray.includes('k'))&&(numArray.includes('q'))&&(numArray.includes('j'))&&(numArray.includes('t')))
    {straight = true}
    if ((numArray.includes('9'))&&(numArray.includes('8'))&&(numArray.includes('q'))&&(numArray.includes('j'))&&(numArray.includes('t')))
    {straight = true}
    if ((numArray.includes('9'))&&(numArray.includes('8'))&&(numArray.includes('7'))&&(numArray.includes('j'))&&(numArray.includes('t')))
    {straight = true}
    if ((numArray.includes('9'))&&(numArray.includes('8'))&&(numArray.includes('7'))&&(numArray.includes('6'))&&(numArray.includes('t')))
    {straight = true}
    if ((numArray.includes('9'))&&(numArray.includes('8'))&&(numArray.includes('7'))&&(numArray.includes('6'))&&(numArray.includes('5')))
    {straight = true}
    if ((numArray.includes('4'))&&(numArray.includes('8'))&&(numArray.includes('7'))&&(numArray.includes('6'))&&(numArray.includes('5')))
    {straight = true}
    if ((numArray.includes('4'))&&(numArray.includes('3'))&&(numArray.includes('7'))&&(numArray.includes('6'))&&(numArray.includes('5')))
    {straight = true}
    if ((numArray.includes('4'))&&(numArray.includes('3'))&&(numArray.includes('2'))&&(numArray.includes('6'))&&(numArray.includes('5')))
    {straight = true}
    if ((numArray.includes('4'))&&(numArray.includes('3'))&&(numArray.includes('2'))&&(numArray.includes('5'))&&(numArray.includes('a')))
    {straight = true}

    for (let i=0;i<5;i++)
    {
        fullArray.push([...numArray].filter(x => x === numArray[i]).length)
    }
    
    for (let i = 0; i < fullArray.length; i++) {
    sum += fullArray[i];
    }
    

    if((numArray.includes('a'))&&(numArray.includes('k'))&&(numArray.includes('q'))&&(numArray.includes('j'))&&(numArray.includes('t')))
    {
        if(allEqual(kindArray))
        {
            document.getElementById("rf-title").style.backgroundColor = "#b08d23"

            
            await new Promise(done => setTimeout(() => done(), 1000));
            showGamble()
            document.getElementById("btn-big").disabled = false;
            document.getElementById("btn-small").disabled = false;
            document.getElementById("btn-deal").disabled = true;
            document.getElementById("btn-cancel-hold").disabled = true;
            document.getElementById("btn-take-score").disabled = false;
            document.getElementById("btn-double-up").disabled = false;
        }
    }
    else if (straight && allEqual(kindArray))
    {
        document.getElementById("sf-title").style.backgroundColor = "#b08d23"

        for(i=1;i<=150000/25;i++)
            {
            await new Promise(done => setTimeout(() => done(), 0.1));
            document.getElementById("credit-score").textContent = (parseInt(document.getElementById("credit-score").textContent) + 25).toString()
            document.getElementById("sf-bonus").textContent = (parseInt(document.getElementById("sf-bonus").textContent) - 25).toString()
            }
        
        await new Promise(done => setTimeout(() => done(), 1000));
        showGamble()
        document.getElementById("left-bc").innerText = "42000"

        document.getElementById("btn-big").disabled = false;
        document.getElementById("btn-small").disabled = false;
        document.getElementById("btn-deal").disabled = true;
        document.getElementById("btn-cancel-hold").disabled = true;
        document.getElementById("btn-take-score").disabled = false;
        document.getElementById("btn-double-up").disabled = false;
    }
    else if (fullArray.includes(4))
    {
        document.getElementById("carre-title").style.backgroundColor = "#b08d23"
        let chooseIncentive = Math.floor(Math.random() * 2) + 1
        let leftCarre = parseInt(document.getElementById("left-bc").innerText)
        let rightCarre = parseInt(document.getElementById("right-bc").innerText)
        
        if (chooseIncentive === 1)
        {
            let leftRemainder = leftCarre % 25
            for(i=1;i<=leftCarre/25;i++)
            {
            await new Promise(done => setTimeout(() => done(), 0.1));
            document.getElementById("credit-score").textContent = (parseInt(document.getElementById("credit-score").textContent) + 25).toString()
            document.getElementById("left-bc").textContent = (parseInt(document.getElementById("left-bc").textContent) - 25).toString()
            }
            document.getElementById("credit-score").textContent = (parseInt(document.getElementById("credit-score").textContent) + leftRemainder).toString()
            document.getElementById("left-bc").textContent = "0"
        }
        else {
            let rightRemainder = rightCarre % 25
            for(i=1;i<=rightCarre/25;i++)
            {
            await new Promise(done => setTimeout(() => done(), 0.1));
            document.getElementById("credit-score").textContent = (parseInt(document.getElementById("credit-score").textContent) + 25).toString()
            document.getElementById("right-bc").textContent = (parseInt(document.getElementById("right-bc").textContent) - 25).toString()
            }
            document.getElementById("credit-score").textContent = (parseInt(document.getElementById("credit-score").textContent) + rightRemainder).toString()
            document.getElementById("right-bc").textContent = "0"
        }
        
        await new Promise(done => setTimeout(() => done(), 1000));
        showGamble()

        if (document.getElementById("left-bc").innerText === "0") {document.getElementById("left-bc").innerText = "42000"}
        if (document.getElementById("right-bc").innerText === "0") {document.getElementById("right-bc").innerText = "42000"}

        document.getElementById("btn-big").disabled = false;
        document.getElementById("btn-small").disabled = false;
        document.getElementById("btn-deal").disabled = true;
        document.getElementById("btn-cancel-hold").disabled = true;
        document.getElementById("btn-take-score").disabled = false;
        document.getElementById("btn-double-up").disabled = false;
 

    }
    else if (fullArray.includes(3) && fullArray.includes(2))
    {
        document.getElementById("fh-title").style.backgroundColor = "#b08d23"

        let fhBonus = parseInt(document.getElementById("fh-bonus").innerText)
        if (fhBonus >= 25)
        {
            fhRemainder = fhBonus % 25
            for(let i=1;i<=fhBonus/25;i++)
            {
                await new Promise(done => setTimeout(() => done(), 0.1));
                document.getElementById("credit-score").textContent = (parseInt(document.getElementById("credit-score").textContent) + 25).toString()
                document.getElementById("fh-bonus").textContent = (parseInt(document.getElementById("fh-bonus").textContent) - 25).toString()
            }
        }
        else{
            document.getElementById("credit-score").textContent = (parseInt(document.getElementById("credit-score").textContent) + fhBonus).toString()
            document.getElementById("fh-bonus").textContent = (parseInt(document.getElementById("fh-bonus").textContent) - fhBonus).toString()
        }

        await new Promise(done => setTimeout(() => done(), 1000));
        showGamble()
        document.getElementById("btn-big").disabled = false;
        document.getElementById("btn-small").disabled = false;
        document.getElementById("btn-deal").disabled = true;
        document.getElementById("btn-cancel-hold").disabled = true;
        document.getElementById("btn-take-score").disabled = false;
        document.getElementById("btn-double-up").disabled = false;
    }
    else if (allEqual(kindArray))
    {
        document.getElementById("flush-title").style.backgroundColor = "#b08d23"
        await new Promise(done => setTimeout(() => done(), 1000));
        showGamble()
        document.getElementById("btn-big").disabled = false;
        document.getElementById("btn-small").disabled = false;
        document.getElementById("btn-deal").disabled = true;
        document.getElementById("btn-cancel-hold").disabled = true;
        document.getElementById("btn-take-score").disabled = false;
        document.getElementById("btn-double-up").disabled = false;
    }
    else if (straight)
    {
        document.getElementById("straight-title").style.backgroundColor = "#b08d23"
        await new Promise(done => setTimeout(() => done(), 1000));
        showGamble()
        document.getElementById("btn-big").disabled = false;
        document.getElementById("btn-small").disabled = false;
        document.getElementById("btn-deal").disabled = true;
        document.getElementById("btn-cancel-hold").disabled = true;
        document.getElementById("btn-take-score").disabled = false;
        document.getElementById("btn-double-up").disabled = false;
    }
    else if (fullArray.includes(3))
    {
        document.getElementById("three-title").style.backgroundColor = "#b08d23"
        //document.getElementById("three-show").style.backgroundColor = "#b08d23"
        await new Promise(done => setTimeout(() => done(), 1000));
        showGamble()
        document.getElementById("btn-big").disabled = false;
        document.getElementById("btn-small").disabled = false;
        document.getElementById("btn-deal").disabled = true;
        document.getElementById("btn-cancel-hold").disabled = true;
        document.getElementById("btn-take-score").disabled = false;
        document.getElementById("btn-double-up").disabled = false;
    }
    else if ((fullArray.includes(2)) && (fullArray.includes(1)) && (sum === 9))
    {
        document.getElementById("two-title").style.backgroundColor = "#b08d23"
        //document.getElementById("two-show").style.backgroundColor = "#b08d23"
        await new Promise(done => setTimeout(() => done(), 1000));
        showGamble()
        document.getElementById("btn-big").disabled = false;
        document.getElementById("btn-small").disabled = false;
        document.getElementById("btn-deal").disabled = true;
        document.getElementById("btn-cancel-hold").disabled = true;
        document.getElementById("btn-take-score").disabled = false;
        document.getElementById("btn-double-up").disabled = false;
    }
    else
    {
        await new Promise(done => setTimeout(() => done(), 1000));
        backCards()
        clearHold()
    }
}

function allEqual(arr) {
  return new Set(arr).size == 1;
}

function backCards(){
    document.getElementById("card1").style.backgroundImage = 'url(./img/back.png)'
    document.getElementById("card2").style.backgroundImage = 'url(./img/back.png)'
    document.getElementById("card3").style.backgroundImage = 'url(./img/back.png)'
    document.getElementById("card4").style.backgroundImage = 'url(./img/back.png)'
    document.getElementById("card5").style.backgroundImage = 'url(./img/back.png)'
}

async function showGamble(){
    document.getElementById("card1").style.backgroundImage = 'url(./img/back.png)'
    document.getElementById("card2").style.backgroundImage = 'none'
    document.getElementById("card3").style.backgroundImage = 'none'
    document.getElementById("card4").style.backgroundImage = 'none'
    document.getElementById("card5").style.backgroundImage = 'none'
    await new Promise(done => setTimeout(() => done(), 700));
    let randomNumber = Math.floor(Math.random() * (52))
    document.getElementById("card1").style.backgroundImage = 'url(./img/' + deck_of_cards[randomNumber] + '.png)'
    clearHold()
    gamble = true
}


function doubleWin(){
    if (document.getElementById("two-title").style.backgroundColor.toString() !== '')
    {document.getElementById("two-show").innerText = ((parseInt(document.getElementById("two-show").innerText))*2).toString()}
    else if (document.getElementById("three-title").style.backgroundColor.toString() !== '')
    {document.getElementById("three-show").innerText = ((parseInt(document.getElementById("three-show").innerText))*2).toString()}
    else if (document.getElementById("straight-title").style.backgroundColor.toString() !== '')
    {document.getElementById("straight-show").innerText = ((parseInt(document.getElementById("straight-show").innerText))*2).toString()}
    else if (document.getElementById("flush-title").style.backgroundColor.toString() !== '')
    {document.getElementById("flush-show").innerText = ((parseInt(document.getElementById("flush-show").innerText))*2).toString()}
    else if (document.getElementById("fh-title").style.backgroundColor.toString() !== '')
    {document.getElementById("fh-show").innerText = ((parseInt(document.getElementById("fh-show").innerText))*2).toString()}
    else if (document.getElementById("carre-title").style.backgroundColor.toString() !== '')
    {document.getElementById("carre-show").innerText = ((parseInt(document.getElementById("carre-show").innerText))*2).toString()}
    else if (document.getElementById("sf-title").style.backgroundColor.toString() !== '')
    {document.getElementById("sf-show").innerText = ((parseInt(document.getElementById("sf-show").innerText))*2).toString()}
    else if (document.getElementById("rf-title").style.backgroundColor.toString() !== '')
    {document.getElementById("rf-show").innerText = ((parseInt(document.getElementById("rf-show").innerText))*2).toString()}
}

function clearNames(){
    if (document.getElementById("two-title").style.backgroundColor.toString() !== '')
    {
        document.getElementById("two-title").style.backgroundColor = "rgb(6, 60, 129)"
        document.getElementById("two-show").innerText = ((parseInt(document.getElementById("stake-score").innerText))*2).toString()
    }
    else if (document.getElementById("three-title").style.backgroundColor.toString() !== '')
    {
        document.getElementById("three-title").style.backgroundColor = "rgb(6, 60, 129)"
        document.getElementById("three-show").innerText = ((parseInt(document.getElementById("stake-score").innerText))*3).toString()
    }
    else if (document.getElementById("straight-title").style.backgroundColor.toString() !== '')
    {
        document.getElementById("straight-title").style.backgroundColor = "rgb(6, 60, 129)"
        document.getElementById("straight-show").innerText = ((parseInt(document.getElementById("stake-score").innerText))*5).toString()
    }
    else if (document.getElementById("flush-title").style.backgroundColor.toString() !== '')
    {
        document.getElementById("flush-title").style.backgroundColor = "rgb(6, 60, 129)"
        document.getElementById("flush-show").innerText = ((parseInt(document.getElementById("stake-score").innerText))*6).toString()
    }
    else if (document.getElementById("fh-title").style.backgroundColor.toString() !== '')
    {
        document.getElementById("fh-title").style.backgroundColor = "rgb(6, 60, 129)"
        document.getElementById("fh-show").innerText = ((parseInt(document.getElementById("stake-score").innerText))*10).toString()
    }
    else if (document.getElementById("carre-title").style.backgroundColor.toString() !== '')
    {
        document.getElementById("carre-title").style.backgroundColor = "rgb(6, 60, 129)"
        document.getElementById("carre-show").innerText = ((parseInt(document.getElementById("stake-score").innerText))*60).toString()
    }
    else if (document.getElementById("sf-title").style.backgroundColor.toString() !== '')
    {
        document.getElementById("sf-title").style.backgroundColor = "rgb(6, 60, 129)"
        document.getElementById("sf-show").innerText = ((parseInt(document.getElementById("stake-score").innerText))*150).toString()
    }
    else if (document.getElementById("rf-title").style.backgroundColor.toString() !== '')
    {
        document.getElementById("rf-title").style.backgroundColor = "rgb(6, 60, 129)"
        document.getElementById("rf-show").innerText = ((parseInt(document.getElementById("stake-score").innerText))*500).toString()
    }
    document.getElementById("three-title").style.backgroundColor = "rgb(6, 60, 129)"
}

async function testCheckResults(){

    // document.getElementById("card1").style.backgroundImage = 'url(./img/king_of_hearts.png)'
    // document.getElementById("card2").style.backgroundImage = 'url(./img/king_of_spades.png)'
    // document.getElementById("card3").style.backgroundImage = 'url(./img/kinf_of_clubs.png)'
    // document.getElementById("card4").style.backgroundImage = 'url(./img/9_of_clubs.png)'
    // document.getElementById("card5").style.backgroundImage = 'url(./img/9_of_hearts.png)'

    let resultArray=[]
    let numArray = []
    let kindArray = []
    let straight = false
    let fullArray = []
    let sum = 0

    for(let i=0;i<5;i++)
    {
        resultArray.push(((document.getElementById("card"+ (i+1)).style.backgroundImage.toString().substring(11))).slice(0,-6))
    }
    for(let i=0;i<5;i++)
    {
        numArray.push(resultArray[i].substring(0,1))
        kindArray.push(resultArray[i].split('_').pop())
    }

    if ((numArray.includes('a'))&&(numArray.includes('k'))&&(numArray.includes('q'))&&(numArray.includes('j'))&&(numArray.includes('t')))
    {straight = true}
    if ((numArray.includes('9'))&&(numArray.includes('k'))&&(numArray.includes('q'))&&(numArray.includes('j'))&&(numArray.includes('t')))
    {straight = true}
    if ((numArray.includes('9'))&&(numArray.includes('8'))&&(numArray.includes('q'))&&(numArray.includes('j'))&&(numArray.includes('t')))
    {straight = true}
    if ((numArray.includes('9'))&&(numArray.includes('8'))&&(numArray.includes('7'))&&(numArray.includes('j'))&&(numArray.includes('t')))
    {straight = true}
    if ((numArray.includes('9'))&&(numArray.includes('8'))&&(numArray.includes('7'))&&(numArray.includes('6'))&&(numArray.includes('t')))
    {straight = true}
    if ((numArray.includes('9'))&&(numArray.includes('8'))&&(numArray.includes('7'))&&(numArray.includes('6'))&&(numArray.includes('5')))
    {straight = true}
    if ((numArray.includes('4'))&&(numArray.includes('8'))&&(numArray.includes('7'))&&(numArray.includes('6'))&&(numArray.includes('5')))
    {straight = true}
    if ((numArray.includes('4'))&&(numArray.includes('3'))&&(numArray.includes('7'))&&(numArray.includes('6'))&&(numArray.includes('5')))
    {straight = true}
    if ((numArray.includes('4'))&&(numArray.includes('3'))&&(numArray.includes('2'))&&(numArray.includes('6'))&&(numArray.includes('5')))
    {straight = true}
    if ((numArray.includes('4'))&&(numArray.includes('3'))&&(numArray.includes('2'))&&(numArray.includes('5'))&&(numArray.includes('a')))
    {straight = true}

    for (let i=0;i<5;i++)
    {
        fullArray.push([...numArray].filter(x => x === numArray[i]).length)
    }
    
    for (let i = 0; i < fullArray.length; i++) {
    sum += fullArray[i];
    }

    if((numArray.includes('a'))&&(numArray.includes('k'))&&(numArray.includes('q'))&&(numArray.includes('j'))&&(numArray.includes('t')))
    {
        if(allEqual(kindArray))
        {
            await new Promise(done => setTimeout(() => done(), 1000));
            alert("You got a ROYAL FLUSH! You will earn " + parseInt(document.getElementById("stake-score").innerText)*500 + " kals")
            document.getElementById("credit-score").textContent = ((parseInt(document.getElementById("credit-score").innerText)+(parseInt(document.getElementById("stake-score").innerText)*500))).toString()
        }
    }
    else if (straight && allEqual(kindArray))
    {
        await new Promise(done => setTimeout(() => done(), 1000));
        alert("You got a STRAIGHT FLUSH! You will earn " + parseInt(document.getElementById("stake-score").innerText)*150 + " kals")
        document.getElementById("credit-score").textContent = ((parseInt(document.getElementById("credit-score").innerText)+(parseInt(document.getElementById("stake-score").innerText)*150))).toString()
    }
    else if (fullArray.includes(4))
    {
        await new Promise(done => setTimeout(() => done(), 1000));
        alert("You got 4 of a kind! You will earn " + parseInt(document.getElementById("stake-score").innerText)*60 + " kals")
        document.getElementById("credit-score").textContent = ((parseInt(document.getElementById("credit-score").innerText)+(parseInt(document.getElementById("stake-score").innerText)*60))).toString()
    }
    else if (fullArray.includes(3) && fullArray.includes(2))
    {
        await new Promise(done => setTimeout(() => done(), 1000));
        alert("You got FULL HOUSE! You will earn " + parseInt(document.getElementById("stake-score").innerText)*10 + " kals")
        document.getElementById("credit-score").textContent = ((parseInt(document.getElementById("credit-score").innerText)+(parseInt(document.getElementById("stake-score").innerText)*10))).toString()
    }
    else if (allEqual(kindArray))
    {
        await new Promise(done => setTimeout(() => done(), 1000));
        alert("You got FLUSH! You will earn " + parseInt(document.getElementById("stake-score").innerText)*7 + " kals")
        document.getElementById("credit-score").textContent = ((parseInt(document.getElementById("credit-score").innerText)+(parseInt(document.getElementById("stake-score").innerText)*7))).toString()
    }
    else if (straight)
    {
        await new Promise(done => setTimeout(() => done(), 1000));
        alert("You got STRAIGHT! You will earn " + parseInt(document.getElementById("stake-score").innerText)*5 + " kals")
        document.getElementById("credit-score").textContent = ((parseInt(document.getElementById("credit-score").innerText)+(parseInt(document.getElementById("stake-score").innerText)*5))).toString()
    }
    else if (fullArray.includes(3))
    {
        await new Promise(done => setTimeout(() => done(), 1000));
        alert("You got 3 of a kind! You will earn " + parseInt(document.getElementById("stake-score").innerText)*3 + " kals")
        document.getElementById("credit-score").textContent = ((parseInt(document.getElementById("credit-score").innerText)+(parseInt(document.getElementById("stake-score").innerText)*3))).toString()
    }
    else if ((fullArray.includes(2)) && (fullArray.includes(1)) && (sum === 9))
    {
        await new Promise(done => setTimeout(() => done(), 1000));
        alert("You got 2 pairs! You will earn " + parseInt(document.getElementById("stake-score").innerText)*2 + " kals")
        document.getElementById("credit-score").textContent = ((parseInt(document.getElementById("credit-score").innerText)+(parseInt(document.getElementById("stake-score").innerText)*2))).toString()
    }
    else
    {
        
    }
}
