// Add a “light blue” background color and some padding to the <div>
let selectDiv = document.querySelector("div");
selectDiv.style.backgroundColor="lightblue";
selectDiv.style.padding="20px";

// Do not display the <li> that contains the text node “John”.

let hideLiJohn=document.querySelector("ul").firstElementChild;
hideLiJohn.style.display="none";


// Add a border to the <li> that contains the text node “Pete”.

let addBoderToLiPete=document.querySelector("ul").lastElementChild;
addBoderToLiPete.style.border="groove yellow 5px";

// Change the font size of the whole body.

let bodyFontSize=document.body;
bodyFontSize.style.fontSize="60px";

// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).

if (selectDiv.style.backgroundColor==="lightblue"){
    let user1=document.querySelector("ul").firstElementChild.textContent="x";
    let user2=document.querySelector("ul").lastElementChild.textContent="y";
    alert(`Hello ${user1} and ${user2} `);
}