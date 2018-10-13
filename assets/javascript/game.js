

// these never change and are constant 
var dinowords = ["trex", "allosaurus", "raptor", "godzilla"];
var image = ["assets/images/t-rex.jpeg","assets/images/allosaurus.png","assets/images/raptor.jpeg","assets/images/godzilla.jpeg" ];
var maxguess= 10;

// these change as you play the game. 
// click reset to change back to orginal values
var index = Math.floor(Math.random() * dinowords.length);
var word = dinowords[index];
var imgSrc = image[index];
var wins = 0
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
  document.getElementById("resetbutton").addEventListener("click", function(event){
  console.log("proof");

  var index = Math.floor(Math.random() * dinowords.length);
  var word = dinowords[index];
  var imgSrc = image[index];
  var wins = 0
  var gameDone = false;
  var answerArray = [];
  var alreadyguessed=[];
  
  for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_"; 
  }
  
  document.getElementById("answer").innerHTML = answerArray.join(" ");
  document.getElementById("image").src = imgSrc;
  document.getElementById("alreadyguessed").innerHTML = "Wrong Guesses";

  }); 

      document.onkeyup = function(event) {    
       var guess = event.key.toLowerCase();
       var belongsTo = false 
       
       var wordFinished = true;
       
      //  if wordfinished {
      //    wins++; newgame()
        
       
       for (var i= 0;i <maxguess.length; i++){
        alreadyguessed=[i]
       }
       
      //  document.getElementById("guesses").innerHTML = alreadyguessed.join(" ");


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
        
      }
    } 

    
     
         