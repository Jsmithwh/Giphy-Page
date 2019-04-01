var topics = [
"koalas",
"salamanders",
"pelicans",
"hedgehogs",
"turtles"
];



    // var queryURL = "https://api.giphy.com/v1/stickers/random?api_key=atua7zCNwm7ymM7oDHt48SXJWyNIzrT9&tag=koala&rating=G";


//Copied from class activity 01/working-movie-app
function displayAnimalInfo() {

  // var animal = $(this).attr("data-name");
  var i=0; 
  for(i=0; i<topics.length; i++) {
  var queryURL = "https://api.giphy.com/v1/stickers/random?api_key=atua7zCNwm7ymM7oDHt48SXJWyNIzrT9&tag=" + topics[i] + "&limit=10&offset=10&rating=G";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
    .then(function(response) {

   

//Exercise 12

    var imageUrl = response.data.image_original_url;


    var animalImage = $("<img>");

    animalImage.attr("src", imageUrl);
    animalImage.attr("alt", "animal image");
    //https://gist.github.com/alex-soto/6b8f0654ff1dbaffeac2dc55ba8ca5d1
    animalImage.attr({
       "data-still": imageUrl + "_s.gif",
      // "data-animate": animal.images.original.url,
      "data-state": "still",
      "class": "gif"
    });



    $("#images").prepend(animalImage);

    var rating = response.Rated;

    // Creating an element to have the rating displayed
    var pOne = $("<p>").text("Rating: " + rating);

    // Displaying the rating
  animalImage.prepend(pOne);

  });
  }}
//taken from exercise 10
function renderButtons() {

  $("#buttons").empty();


  for (var i = 0; i < topics.length; i++) {

    var a = $("<button>");

    a.addClass("animal-btn");

    a.attr("data-name", topics[i]);
 
    a.text(topics[i]);

    $("#buttons").append(a);
  }
}

$("#add-animal").on("click", function(event) {
  event.preventDefault();

  animal = $("#animal-input").val().trim();

  topics.push(animal);

  renderButtons();
});

    //exercise 15
    $(".gif").on("click", function() {
  
      var state = $(this).attr("data-state");
      
      if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
    });

$(document).on("click", ".animal-btn", displayAnimalInfo);


renderButtons();
  


