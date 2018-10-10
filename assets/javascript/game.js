



var wins = 0;
var dinowords = ["trex", "allosaurus", "raptor, godzilla"];
var questions = [
//       { q: "This dinosaur has little arms", a: ["t,r,e,x"] },
//       { q: "definitely a carnivore", a: "a l l o s a u r u s" },
//       { q: "jurassic park fav", a: "r", "a", "p", "t", "o", r" },
//       { q: "runnnnn", a: },
]

var table = ["Image1", "Image2", "Image3"];
      var images = [];


var word = dinowords[Math.floor(Math.random() * dinowords.length)];


var answerArray = [];
 for (var i = 0; i < word.length; i++) {
 answerArray[i] = "_";
}

// var alreadyguessed?

// var questionIndex = 0;


  //loop 2
var word= "trex";
var question= "";



var alreadyguessed=[];

  

 

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
     