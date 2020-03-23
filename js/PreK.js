var winsound = new Audio("../audio/win.mp3");
skippedarr = []


preprimerarr = ["the", "to", "and", "a", "I", "you", "it", "in", "said", "for", "up", "look", "is", "go", "we", "little", "down", "can", "see", "not", "one", "my", "me", "big", "come", "blue", "red", "where", "jump", "away", "here", "help", "make", "yellow", "two", "play", "run", "find", "three", "funny"];
primerarr = ["he", "was", "that", "she", "on", "they", "but", "at", "with", "all", "there", "out", "be", "have", "am", "do", "did", "what", "so", "get", "like", "this", "will", "yes", "went", "are", "now", "no", "come", "ride", "into", "good", "want", "too", "pretty", "four", "saw", "well", "ran", "brown", "eat", "who", "new", "must", "black", "white", "soon", "our ate", "say", "under", "please"];
firstarr = ["of", "his", "head", "him", "her", "some", "as", "then", "could", "when", "were", "them", "ask", "an", "over", "just", "from", "any", "how", "know", "put", "take", "every", "old", "by", "after", "think", "let", "going", "walk", "again", "may", "stop", "fly", "round", "give", "once", "open", "has", "live", "thank"];
secondarr = ["always", "around", "because", "been", "before", "best", "both", "buy", "call", "cold", "does", "don’t", "fast", "first", "five", "found", "gave", "goes", "green", "its", "made", "many", "off", "or", "pull", "read", "right", "sing", "sit", "sleep", "tell", "their", "these", "those", "upon", "us", "use", "very", "wash", "which why", "wish", "work", "would", "write", "your"];
thirdarr = ["about", "better", "bring", "carry", "clean", "cut", "done", "draw", "drink", "eight", "fall", "far", "full", "got", "grow", "hold", "hot", "hurt", "if", "keep", "kind", "laugh", "light", "long", "much", "myself", "never", "only", "own", "pick", "seven", "shall", "show", "six", "small", "start", "ten", "today", "together", "try", "warm"];

var chosenword;
var winsnum=0

//select random word and assign it to the global var chosenword
function selectword() {
  chosenword = preprimerarr[Math.floor(Math.random() * preprimerarr.length)];
  console.log(chosenword);
  $(document).ready(function () {
    $('#wordplace').html(chosenword);
  });
  var commands = {}
  commands[chosenword] = function () {
    winsnum++
    addwin()
    winsound.play()
    selectword()
  }
  console.log(commands)
  startAnnyang(commands);
}

function addwin() {
  $("#wins").append(`<span style="font-size: 200%">${chosenword}</span><img src="./win.png" class="mx-1 my-1"style="width:5%"></img>`);
  $("#winsnum").html(`<span style="width:200%">${winsnum}</span>`)
}

$("#skip").click(skipword)

function skipword() {
    $("#skipped").append(`<span style="font-size: 125%">${chosenword} - </span>`);
    skippedarr.push(chosenword)
    selectword()
}

function startAnnyang(commands) {
  annyang.addCommands(commands);

  // Start listening. You can call this here, or attach this call to an event, button, etc.
  annyang.start();
  annyang.isListening()
}
selectword();

