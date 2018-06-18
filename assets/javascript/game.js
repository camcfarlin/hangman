// Array of words 
// var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado','Connecticut', 'Delaware', 'Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington', 'West Virginia','Wisconsin','Wyoming'];
// Attempted to do states, can not get it to recoginze spaces or duplicate letters

var food = ['turkey', 'bacon', 'ramen', 'pho', 'rice', 'corn', 'bread', 'scone', 'ocra', 'pear', 'beans', 'peas']

// Choose words radomly
var underScore = [];
var rightGuess = [];
var wrongGuess = [];
var incCounter = 10;
var winScore = 0;
var randNum = Math.floor(Math.random() * food.length);
var randWord = food[randNum];
    randWord = randWord.toLowerCase();


function newGame() {
    gameRunning = true;
    underScore = [];
    rightGuess = [];
    wrongGuess = [];
    incCounter = 10;
    $( ".underscore" ).text ( "_ _ _ _");
    $( ".lives" ).text( incCounter );  
    randNum = Math.floor(Math.random() * food.length);
    randWord = food[randNum];
    startOver()
}

// Dom mani - replace whats in each repsective div

document.getElementsByClassName('underScore');
var docUnderScore = document.getElementsByClassName('underscore');
var docrightGuess = document.getElementsByClassName('rightGuess');
var docWrongGuess = document.getElementsByClassName('wrongGuess');

console.log(randWord);

// Creat underscore based on lenght of word

var blankUnderscore = () => {
    for(var i = 0; i < randWord.length; i++) {
        underScore.push('_');
    }
    return underScore;
}
console.log(blankUnderscore());
 
//  user input - guess
    
document.addEventListener('keypress', (event) => {
//convert  and make fillable
  
    var keyWord = String.fromCharCode(event.keyCode);

// Check if guess is right 

    if(randWord.indexOf(keyWord) > -1) {

// If right push to right array

        rightGuess.push(keyWord);

//replace doc with correct letter

        underScore[randWord.indexOf(keyWord)] = keyWord;
        docUnderScore[0].innerHTML = underScore.join(' ');
        docrightGuess[0].innerHTML = rightGuess;
        

//guess matches all +winscore/alert/startover

        if(underScore.join('') == randWord) {
            winScore ++;
            $( ".wins" ).text( winScore );
            setTimeout(function(){ 
            alert('You Win');
            newGame(); 
            }, 200);
            
        }
    } 

// If wrong push to wrong array - log onto doc
    else {wrongGuess.push(keyWord);
        docWrongGuess[0].innerHTML = wrongGuess;
        incCounter --;
        $( ".lives" ).text( incCounter );
        if(incCounter === 0) {
            setTimeout(function(){ 
                alert("You Lose");
                newGame();    
                }, 200);
           
        }
     };
    });

//startover without triggering anothe eventlister 
function startOver () {
document.getElementsByClassName('underScore');
var docUnderScore = document.getElementsByClassName('underscore');
var docrightGuess = document.getElementsByClassName('rightGuess');
var docWrongGuess = document.getElementsByClassName('wrongGuess');
console.log(randWord);
var blankUnderscore = () => {
    for(var i = 0; i < randWord.length; i++) {
        underScore.push('_');
    }
    return underScore;
}
console.log(blankUnderscore());
    var keyWord = String.fromCharCode(event.keyCode);
    if (randWord.indexOf(keyWord) > -1) {
        rightGuess.push(keyWord);
        underScore[randWord.indexOf(keyWord)] = keyWord;
        docUnderScore[0].innerHTML = underScore.join(' ');
        docrightGuess[0].innerHTML = rightGuess;
        if(underScore.join('') == randWord) {
            winScore ++;
            console.log (winScore);
            $( ".wins" ).text( winScore );
            setTimeout(function(){ 
                alert('You Win');
                newGame(); 
                }, 200);
        }
    } 
    else {wrongGuess.push(keyWord);
        docWrongGuess[0].innerHTML = wrongGuess;
        incCounter += -1;
        $( ".lives" ).text( incCounter );
        if(incCounter === 0) {
            setTimeout(function(){ 
                alert("You Lose");
                newGame();    
                }, 200);  
        }
     };
    ;}