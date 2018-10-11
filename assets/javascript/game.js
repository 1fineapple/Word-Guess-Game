



var wins = 0;
var dinowords = ["trex", "allosaurus", "raptor, godzilla"];
var image = ["Image1", "Image2", "Image3"];
var word = dinowords[Math.floor(Math.random() * dinowords.length)];
var countAttempts= 0

var answerArray = [];
var alreadyguessed=[];


 for (var i = 0; i < word.length; i++) {
 answerArray[i] = "_"; 

}


  // here you have push them into a string



var word= "trex";
var image = 0


// while(dinowords[i]) {
//   text += dinowords[i] + "<br>";
//     i++;



  // here you have print out (push) out- unless we are doing it down below?

  // var remainingletters = word.length
  // while(remainingLetters >= 0) {
  

  

 

  function checkLetter() {   
      document.onkeyup = function(event) {    
       var guess = event.key.toLowerCase();
       
       var belongsTo = false 
       
        for (i = 0; i < word.length; i++) {
          if (guess === word[i]) {
            answerArray[i] = guess;
            document.getElementById("answer").innerHTML = answerArray.join(" ");
          belongsTo = true
      
          }
          if (!belongsTo) {
                alreadyguessed.push(guess);
            document.getElementById("alreadyguessed").innerHTML = alreadyguessed.join(" ");
             

            }


         }
       }
     }
    
    
           checkLetter();
     