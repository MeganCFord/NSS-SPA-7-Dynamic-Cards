// Create an HTML page that contains a text area and a button labeled Create.
// When the user enters in text into the text area and then clicks the create button, create a new card element in the DOM. You decide the height/width of the card.
// When the user clicks the Delete button, the containing card, and no other cards, should then be removed from the DOM. Not just made invisible, actually removed from the DOM.


//DOM getters
var inputText = document.getElementById("inputText");
var submitButton = document.getElementById("submitButton");
var cardContainer = document.getElementById("cardContainer");

//adds a card div to the container div when called.
var createCardDiv = function() {
  var card = document.createElement("div"); 
  cardContainer.appendChild(card);
  card.className = "card";
  return card;

}

//called when submit is clicked. adds div per above, and inputs text.
function createCard(){
  var cardText = inputText.value;
  var card = createCardDiv();
  card.innerHTML += `<p>${cardText}</p><button class = "deletebutton">Delete this card</button>`
  inputText.value = "";

  //WITHIN card creation function, create delete card button. 
  var deleteCard = function() {
    var cardDiv = event.srcElement.parentElement; 
    cardContainer.removeChild(cardDiv);
  }

  var deleteButtons = document.getElementsByClassName("deletebutton");
  var deleteButton = deleteButtons[deleteButtons.length-1]
  deleteButton.addEventListener("click", deleteCard);
}


//event listeners
submitButton.addEventListener("click", createCard);


