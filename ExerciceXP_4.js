/*
In the body of the HTML page, create an empty div:
<div class="listBooks"></div>
In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
title,
author,
image : a url,
alreadyRead : which is a boolean (true or false).

Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)
Requirements : All the instructions below need to be coded in the js file:
Using the DOM, render the books inside an HTML table (the HTML table must be added to the <div> created in part 1).
For each book :
You have to display the book’s title and the book’s author.
Example: HarryPotter written by JKRolling.
The width of the image has to be set to 100px.
If the book is already read. Set the color of the book’s details to red.

 */



let allBooks=[
    book1={
        title: "LE ROMAN",
        author: "Michel Raimond",
        link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6kGHOQIb7TjuHEbl8o-KytwhwHqSaAcclPECztKg1dOERbRaJcx5IUXXZ6StzTjXcqFk&usqp=CAU",
        alreadyRead: false

    },
    book1={
        title: "EN GARDE A VUE",
        author: "G. Morris",
        link: "https://ec56229aec51f1baff1d-185c3068e22352c56024573e929788ff.ssl.cf1.rackcdn.com/attachments/large/9/5/3/001186953.jpg",
        alreadyRead: true

    }
]

// let's create the table in HTML

/* NB: I took a long path to do this exercice in order to learn about use DOM in HTML.
Thank you for understanding
*/

let tableau=document.createElement("table");
tableau.style.width="80%";
tableau.style.margin="auto";



 let title=document.createElement("h1");
 title.textContent="All Books"
 title.style.textAlign="center"
 
 

 /*------------------------------------------------------------------*/
 let row1=document.createElement("tr");
 tableau.appendChild(row1);
 let column1=document.createElement("td")
 row1.appendChild(column1);

 let column2=document.createElement("td")
 column2.style.textAlign="center";
 column2.style.border="solid black";
 column2.textContent="Books and Authors";
 row1.appendChild(column2);

 let column3=document.createElement("td")
 column3.style.textAlign="center";
 column3.style.border="solid black";
 column3.textContent="Link";
 row1.appendChild(column3);

 let column4=document.createElement("td")
 column4.style.textAlign="center";
 column4.style.border="solid black";
 column4.textContent="AlreadyRead";
 row1.appendChild(column4);
/*---------------------------------------------------------------------*/

let row2=document.createElement("tr");
tableau.appendChild(row2);
let column5=document.createElement("td")
column5.style.textAlign="center";
column5.style.border="solid black";
row2.appendChild(column5);
column5.textContent="Books 1";

let column6=document.createElement("td")
column6.style.textAlign="center";
column6.style.fontWeight="bold"
column6.style.border="solid black";
column6.textContent=`${allBooks[0].title}  written by ${allBooks[0].author}`;
row2.appendChild(column6);

let column7=document.createElement("td");
column7.style.textAlign="center";
column7.style.border="solid black";
let link1=document.createElement("a");
link1.href=allBooks[0].link;
let image1=document.createElement("img");
image1.src=allBooks[0].link;
image1.style.width="100px";
image1.style.heigth="100px";
link1.appendChild(image1);
column7.appendChild(link1)
row2.appendChild(column7);

let column8=document.createElement("td")
column8.style.textAlign="center";
column8.style.border="solid black";
column8.textContent=allBooks[0].alreadyRead;
row2.appendChild(column8);
/*---------------------------------------------------------------------*/

let row3=document.createElement("tr");
tableau.appendChild(row3);
let column9=document.createElement("td")
column9.style.textAlign="center";
column9.style.border="solid black";
row3.appendChild(column9);
column9.textContent="Books 2";

let column10=document.createElement("td")
column10.style.textAlign="center";
column10.style.fontWeight="bold"
column10.style.border="solid black";
column10.textContent=`${allBooks[1].title}  written by ${allBooks[1].author}`;
row3.appendChild(column10);

let column11=document.createElement("td");
column11.style.textAlign="center";
column11.style.border="solid black";
let link2=document.createElement("a");
link2.href=allBooks[1].link;
let image2=document.createElement("img");
link2.appendChild(image2);
image2.src=allBooks[1].link;
image2.style.width="100px";
image2.style.heigth="100px";
column11.appendChild(link2)
row3.appendChild(column11);

let column12=document.createElement("td");
column12.style.textAlign="center";
column12.style.border="solid black";
column12.textContent=allBooks[1].alreadyRead;
row3.appendChild(column12);
 console.log(tableau)

 // add the table in the div

 let tableInDiv=document.querySelector(".listBooks");
 tableInDiv.appendChild(tableau);

 tableInDiv.prepend(title); // to add the title before the table;

 
 




