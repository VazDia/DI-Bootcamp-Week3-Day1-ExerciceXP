
// Retrieve the div and console.log it
 let divRetrieving = document.getElementById("container");
 console.log(divRetrieving);

 // Change the name “Pete” to “Richard”.
 document.querySelector(".list").children[1].textContent="Richard";

 // Change each first name of the two <ul>'s to your name.
 let selectClass=document.querySelectorAll(".list");
 selectClass.forEach(element => element.children[0].textContent="Vazoumana")

 // Delete the <li> that contains the text node “Sarah”.
 selectClass[1].children[1].remove();

//BONUS

// Add a class called student_list to both of the <ul>'s
let selectUls= document.querySelectorAll("ul");
selectUls.forEach(ul => ul.classList.add("student_list")); // or selectUls.forEach(ul => ul.classList.replace("list","student_list")) for replacing

//Add the classes university and attendance to the first <ul>.
selectUls[0].classList.add("university","attendance"); 

 
