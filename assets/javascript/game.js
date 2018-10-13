

var wins = 0
var dinowords = ["trex", "allosaurus", "raptor", "godzilla"];
var image = ["assets/images/t-rex.jpeg","assets/images/allosaurus.png","assets/images/raptor.jpeg","assets/images/godzilla.jpeg" ];




// game begins

var index = Math.floor(Math.random() * dinowords.length);
var word = dinowords[index];
var imgSrc = image[index];
var maxguess= 10

var gameDone = false;
var answerArray = [];
var alreadyguessed=[];

for (var i = 0; i < word.length; i++) {
  answerArray[i] = "_"; 
}

document.getElementById("answer").innerHTML = answerArray.join(" ");
document.getElementById("image").src = imgSrc;


checkLetter();


function checkLetter() {   
      document.onkeyup = function(event) {    
       var guess = event.key.toLowerCase();
       var belongsTo = false 
       
       var wordFinished = true;
       // if the word is finished count as win++, if alreadyguessed<maxguess; lose ++ 
       // if condition 1 if condition 2 elses   alreadyguessed.length maxguess 


        for (i = 0; i < word.length; i++) {
            if (guess === word[i]) {
              answerArray[i] = guess;
              document.getElementById("answer").innerHTML = answerArray.join(" ");
              belongsTo = true
            }

            if (word[i] === '_') {
              wordFinished = false;
            }
         }

         if (!belongsTo) {
          alreadyguessed.push(guess);
          document.getElementById("alreadyguessed").innerHTML = alreadyguessed.join(" ");
        }
        
        if(wordFinished) {
          //newGame();
        }
    } 
}
    
     
         