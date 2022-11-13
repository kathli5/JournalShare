<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</head>
var prompts = ["Talk About Your Day", "Identify Things You’re Grateful For","Write a List of Your Coping Mechanisms","Describe a Goal","Write About How Different You Were 5 Years Ago", "Write a Letter to Your Body", "List and Describe Your Emotions","Write About How You’d Describe Yourself to a Stranger", "Describe the Best Compliment You’ve Ever Gotten","Write a Message for Yourself on Bad Days"];
/**
 * Takes an array as its argument and returns a random element from the array
 * @param {String[]} inputArr array of possible moves, rock, paper, and scissors
 * @returns{String} randomly selects one of the moves (elements of the String array)
 */
function randomElt(inputArr){
    let randInd = Math.floor(inputArr.length * Math.random());
    return inputArr[randInd];
}
$("#happy").click(displayHappy);
function displayHappy()){
  $("#filteredPosts").text("happy blog posts");
}
