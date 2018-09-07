
var number = 10;
var intervalId;
var q2;
var wrong = 0;
var tRight = 0;
var tWrong = 0;
var unCheck = ["Mel Gibson","Harrison Ford","Sean Connery", "Spiders", "Dog", "Snakes"];

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

    function melGibson() {
      //answer Snakes
      q1 = document.getElementById("Spiders").value;
    document.getElementById("Mel Gibson").innerHTML = q1;
    document.getElementById(unCheck[1]).checked = false;
    document.getElementById(unCheck[2]).checked = false;
    console.log(q1);
    
    answerCheck();
    }
  
    function harrisonFord() {
      q1 = document.getElementById("Dogs").value;
    document.getElementById("Harrison Ford").innerHTML = q1;
    document.getElementById(unCheck[0]).checked = false;
    document.getElementById(unCheck[2]).checked = false;
    console.log(q1);
    
    answerCheck();

    }

    function seanConnery() {
      q1 = document.getElementById("Snakes").value;
    document.getElementById("Sean Connery").innerHTML = q1;
    document.getElementById(unCheck[0]).checked = false;
    document.getElementById(unCheck[1]).checked = false;
    console.log(q1);
    
    answerCheck();

}


function answerCheck() {
  if (q2 != [unCheck[5]]) {
//alert("wrong answer") ;
//console.log("this is q2 " + q2);
//console.log("this is unCheck1 " + [unCheck[1]]);
//console.log("this is wrong " + wrong);
tWrong++;
$("#showwrong").html("<h4>" + "Total Right is: " + tWrong + "</h4>");
}
//}

//function count() {
else (q2 === unCheck[5]); {
//alert("Total right is: " + tRight);
tRight++;
$("#showright").html("<h4>" + "Total Right is: " + tRight + "</h4>");
}
}





    function melGibson() {
      //answer Harrison Ford
      q2 = document.getElementById("Mel Gibson").value;
    document.getElementById("Mel Gibson").innerHTML = q2;
    document.getElementById(unCheck[1]).checked = false;
    document.getElementById(unCheck[2]).checked = false;
    console.log(q2);
    
    answerCheck();
    }
  
    function harrisonFord() {
      q2 = document.getElementById("Harrison Ford").value;
    document.getElementById("Harrison Ford").innerHTML = q2;
    document.getElementById(unCheck[0]).checked = false;
    document.getElementById(unCheck[2]).checked = false;
    console.log(q2);
    
    answerCheck();

    }

    function seanConnery() {
      q2 = document.getElementById("Sean Connery").value;
    document.getElementById("Sean Connery").innerHTML = q2;
    document.getElementById(unCheck[0]).checked = false;
    document.getElementById(unCheck[1]).checked = false;
    console.log(q2);
    
    answerCheck();

}

  function answerCheck() {
      if (q2 != [unCheck[1]]) {
alert("wrong answer") ;
//console.log("this is q2 " + q2);
//console.log("this is unCheck1 " + [unCheck[1]]);
//console.log("this is wrong " + wrong);
tWrong++;
$("#showwrong").html("<h4>" + "Total Right is: " + tWrong + "</h4>");
    }
//}
    
//function count() {
else (q2 === unCheck[1]); {
//alert("Total right is: " + tRight);
tRight++;
$("#showright").html("<h4>" + "Total Right is: " + tRight + "</h4>");
}
}

