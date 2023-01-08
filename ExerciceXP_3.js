/*
In the <div>, change the value of the id attribute from navBar to socialNetworkNavigation,
 using the setAttribute method.
 */

 let attributeValueChange = document.getElementById("navBar");
 attributeValueChange.setAttribute("id","socialNetworkNavigation");

// First, create a new <li> tag (use the createElement method).
let liTag=document.createElement("li");
console.log(liTag);

// Create a new text node with “Logout” as its specified text.
let textNode=document.createTextNode("Logout");

// Append the text node to the newly created list node (<li>).
liTag.append(textNode);

// Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.

let findElement= document.getElementById("socialNetworkNavigation");
let elementNode=findElement.querySelector("ul");
elementNode.appendChild(liTag);

/*
Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> 
elements from their parent element (<ul>).
 Display the text of each link. (Hint: use the textContent property).
 */
let ulFirstChild=elementNode.firstElementChild.textContent;
let ulLastChild=elementNode.lastElementChild.textContent;

console.log(`firstElementChild: ${ulFirstChild} and lastElementChild: ${ulLastChild}`);