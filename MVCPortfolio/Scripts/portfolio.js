$(document).ready(function () {    
    
   // Palindrome Exercise

           $("#answer").click(function() {               
                   
               var str = $("#inputtext").val();
               var regex = /[^0-9a-zA-Z]/g

                   str = str.toLowerCase().replace(regex, '');
                   var test = str.split("").reverse().join("");
                   if (test === str) {
                       $("#answer1").text("This is a palindrome.");
                   } else {
                       return $("#answer1").text("This is not a palindrome.");
                   }
           });

    // FizzBuzz Exercise
           
           $("#reveal").click(function () {
              
               var input1 = $("#fizzbuzz1").val();
               var input2 = $("#fizzbuzz2").val();
               var regex = /^[0-9]+$/; 

               if  ((input1 > 100) || (input2 > 100) || (input1 < 0) || (input2 < 0)) {
                   $("#reveal1").text("Please enter a number between 1 and 100");
               } else if (!input1.match(regex) || !input2.match(regex)) {
                       $("#reveal1").text("Please enter numbers only.");
                   } else {
                       $("#reveal1").text("");
                       for (var i = 1; i < 101; i++) {
                           if ((i % input1 === 0) && (i % input2 === 0)) {
                               $("#reveal1").append("FizzBuzz!" + "\n" + "\n");
                           } else if (i % input1 === 0) {
                               $("#reveal1").append("Fizz" + "\n" + "\n");
                           } else if (i % input2 === 0) {
                               $("#reveal1").append("Buzz" + "\n" + "\n");
                           } else {
                               $("#reveal1").append(i + "\n" + "\n");
                           }
                       }
                   }
              });

    // Factorial Exercise

           $("#revealit").click(function () {
               

               var factor1 = $("#factor1").val();
               var regex = /^[0-9]+$/;

               if (factor1 > 170)
               {
                   $("#buzz").fadeIn("slow");
                   $("#revealit1").text("Please enter a lower number");
               }
               else if (factor1 < 0 || !factor1.match(regex)) {
                   $("#buzz").fadeOut("slow");
                   $("#revealit1").text("Please enter a positive number only");
               } else if (factor1 == 0) {
                   $("#buzz").fadeOut("slow");
                   $("#revealit1").text("Your number factorialized is 1.");                
               } else {
               
               for (var i=(factor1-1); i>=1; i--) {
                   factor1 = factor1 * i;
               }
               $("#buzz").fadeOut("slow");
               $("#revealit1").text("Your number factorialized is " + factor1 + ".");
               }
               
           });
    // Arithmetic Exercise
    
           $("#answerme").click(function () {

               var num1 = $("#num11").val();
               var num2 = $("#num21").val();
               var num3 = $("#num31").val();
               var num4 = $("#num41").val();
               var num5 = $("#num51").val();

               var regex = /^[0-9]+$/;

               if (!num1.match(regex) || !num2.match(regex) || !num3.match(regex) || !num4.match(regex) || !num5.match(regex)) {
                   $("#answerme1").text("Please enter positive numbers only.");
               } else {
                   $("#answerme1").text(sum(num1, num2, num3, num4, num5));
                   $("#answerme2").text(product(num1, num2, num3, num4, num5));
                   $("#answerme3").text(mean(num1, num2, num3, num4, num5));
                   $("#answerme4").text(highest(num1, num2, num3, num4, num5));
                   $("#answerme5").text(lowest(num1, num2, num3, num4, num5));
               
               //Sum of numbers
               function sum(num1, num2, num3, num4, num5) {                   
                   var sum = +num1 + +num2 + +num3 + +num4 + +num5
                   return ("The sum of all the numbers is " + sum + ".");
               }

               //Product of numbers
               function product(num1, num2, num3, num4, num5) {
                   var product = +num1 * +num2 * +num3 * +num4 * +num5;
                   return ("The product of all the numbers is " + product + ".");
               }

               //Mean all numbers
               function mean(num1, num2, num3, num4, num5) {
                    var mean = ((+num1 + +num2 + +num3 + +num4 + +num5) / 5);
                    return ("The mean of all the numbers is " + mean + ".");
               }

               //Find highest of numbers
               function highest(num1, num2, num3, num4, num5) {
                   var highest = Math.max(num1, num2, num3, num4, num5);
                   return ("The highest of the numbers is " + highest + ".");
               }

               //Find lowest of numbers
               function lowest(num1, num2, num3, num4, num5) {
                   var lowest = Math.min(num1, num2, num3, num4, num5);
                   return ("The lowest of the numbers is " + lowest + ".");
               }
           }

           });

    // Allowing the About Me div to appear with click function

           $("#showdiv").click(function () {
               $('#aboutme').toggle('slow', function () {
               });
               $("#aboutme").css({ 'display': "inline-block"  });
           });

           $("#closeme").click(function () {
               $('#aboutme').toggle('slow', function () {

               });
           });

    // Changing portfolio images with hover function

           $("#images1").hover(function () {
               $(this).attr('src', '/img/javascriptexercises.png');
           }, function () {
               $(this).attr('src', '/img/javascript.png');
           });

           $("#images2").hover(function () {
               $(this).attr('src', '/img/coming-soon.jpg');
           }, function () {
               $(this).attr('src', '/img/bugtracker.jpg');
           });

           $("#images3").hover(function () {
               $(this).attr('src', '/img/coming-soon.jpg');
           }, function () {
               $(this).attr('src', '/img/car-finder.jpg');
           });

           $("#images4").hover(function () {
               $(this).attr('src', '/img/shoppingcartapp.png');
           }, function () {
               $(this).attr('src', '/img/shoppingcart.png');
           });

           $("#images5").hover(function () {
               $(this).attr('src', '/img/coming-soon.jpg');
           }, function () {
               $(this).attr('src', '/img/budget.jpg');
           });

           $("#images6").hover(function () {
               $(this).attr('src', '/img/blogpost.png');
           }, function () {
               $(this).attr('src', '/img/blog.jpeg');
           });
           
           
});
