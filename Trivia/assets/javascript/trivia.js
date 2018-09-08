
var number = 10;
var intervalId;
var q2;
var wrong = 0;
var tRight = 0;
var tWrong = 0;
var unCheck = ["Mel Gibson", "Harrison Ford", "Sean Connery", "Spiders", "Dogs", "Snakes"];

function run() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}

//  The decrement function.
function decrement() {

  //  Decrease number by one.
  number--;

  //  Show the number in the #show-number tag.
  $("#show-number").html("<h3>" + "Time Remaining " + number + "</h3>");


  //  Once number hits zero...
  if (number === 0) {

    //  ...run the stop function.9
    stop();

    //  Alert the user that time is up.
    alert("Time Up!");
  }
}
//console.log(q2);
//console.log(unCheck[1]);
//  The stop function
function stop() {

  //  Clears our intervalId
  //  We just pass the name of the interval
  //  to the clearInterval function.
  clearInterval(intervalId);
}

run();

function spiders() {
  //answer Snakes
  q1 = document.getElementById("Spiders").value;
  document.getElementById("Spiders").innerHTML = q1;
  document.getElementById(unCheck[4]).checked = false;
  document.getElementById(unCheck[5]).checked = false;
  console.log(q1);

  answerCheck1();
}

function dogs() {
  q1 = document.getElementById("Dogs").value;
  document.getElementById("Dogs").innerHTML = q1;
  document.getElementById(unCheck[3]).checked = false;
  document.getElementById(unCheck[5]).checked = false;
  console.log(q1);

  answerCheck1();

}

function snakes() {
  q1 = document.getElementById("Snakes").value;
  document.getElementById("Snakes").innerHTML = q1;
  document.getElementById(unCheck[3]).checked = false;
  document.getElementById(unCheck[4]).checked = false;
  console.log(q1);

  answerCheck1();

}


function answerCheck1() {
  if (q1 != [unCheck[5]]) {
    //alert("wrong answer") ;
    //console.log("this is q2 " + q2);
    //console.log("this is unCheck1 " + [unCheck[1]]);
    //console.log("this is wrong " + wrong);
    tWrong++;
    $("#showwrong").html("<h4>" + "Total wrong is: " + tWrong + "</h4>");
    //console.log("this is q1 " + q1);
    //console.log("this is unchecked " + unCheck[5]);
  }
  //document.getElementById("newshowwright").innerHTML="You have " + tright;

  //function count() {
  //else (q1 === unCheck[5]); {
  else {
    //alert("Total right is: " + tRight);
    tRight++;
    $("#showright").html("<h4>" + "Total Right is: " + tRight + "</h4>");
    //document.getElementById("newshowwright").innerHTML="You have " + tRight;
  }
}


function melGibson() {
  //answer Harrison Ford
  q2 = document.getElementById("Mel Gibson").value;
  document.getElementById("Mel Gibson").innerHTML = q2;
  document.getElementById(unCheck[1]).checked = false;
  document.getElementById(unCheck[2]).checked = false;
  console.log(q2);

  answerCheck2();
}

function harrisonFord() {
  q2 = document.getElementById("Harrison Ford").value;
  document.getElementById("Harrison Ford").innerHTML = q2;
  document.getElementById(unCheck[0]).checked = false;
  document.getElementById(unCheck[2]).checked = false;
  console.log(q2);

  answerCheck2();
}

function seanConnery() {
  q2 = document.getElementById("Sean Connery").value;
  document.getElementById("Sean Connery").innerHTML = q2;
  document.getElementById(unCheck[0]).checked = false;
  document.getElementById(unCheck[1]).checked = false;
  console.log(q2);

  answerCheck2();
}

function answerCheck2() {
  if (q2 != [unCheck[1]]) {
    //alert("wrong answer") ;
    console.log("this is q2 " + q2);
    console.log("this is unCheck1 " + [unCheck[1]]);
    //console.log("this is wrong " + wrong);
    tWrong++;
    $("#showwrong").html("<h4>" + "Total wrong is: " + tWrong + "</h4>");
  }
  //}

  //function count() {
  //else (q2 === unCheck[1]); {
  else {
    //alert("Total right is: " + tRight);
    tRight++;
    $("#showright").html("<h4>" + "Total Right is: " + tRight + "</h4>");
  }
}

