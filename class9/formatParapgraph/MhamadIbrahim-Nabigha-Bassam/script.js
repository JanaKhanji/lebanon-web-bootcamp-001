/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
*/
let paragraph = document.querySelector("p");
let paragraphToArray = paragraph.innerText.split(" ");

let paragraphBackToString = paragraphToArray
  .map((element) => (element.length >= 8 ? `<mark>${element}</mark>` : element))
  .join(" ");

paragraph.innerHTML = paragraphBackToString;

//Alternate solution
// for (let i=0; i < paragraphToArray.length; i++) {
// if (paragraphToArray[i].length >= 8 ) {
// paragraphToArray[i] = paragraphToArray[i].replace(paragraphToArray[i], `<span class="yellowBackground">${paragraphToArray[i]}</span >` }
//  }
// }

/*
  Exercise 02
  -----------
  Add a link back to the source of the text (Source: https://forcemipsum.com/) after the paragraph tag.
*/

let link = document.createElement("a");
link.innerText = "forcemipsum";
link.href = "https://forcemipsum.com/";
document.body.appendChild(link);

/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line in the paragraph text.
  A sentence can be assumed to be a string of text terminated with a period (.)
*/

paragraph.innerHTML = paragraphBackToString.split(".").join("<br>");

/* 
  Exercise 04
  -----------
  Count the number of words in the paragraph tag and display the count afer the heading.
  You can assume that all words are separated by one singular whitespace.
*/

let numberOfWords = paragraphToArray.length;
let counterElement = document.createElement("p");
counterElement.innerText = `${numberOfWords} words`;
document.body.insertBefore(counterElement, paragraph);

//the code above needs adjustment. We have to filter the commas and exclamation marks

/*
  Exercise 05
  -----------
  Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲) 
*/

let thinkingText = paragraph.innerHTML.replaceAll("?", "🤔");
paragraph.innerHTML = thinkingText;
let astonishedText = paragraph.innerHTML.replaceAll("!", "😲");
paragraph.innerHTML = astonishedText;
