$(document).ready(function() {
  $("#button").click(function() {
    displayPics();
  });
});

function displayPics(){

  let imagesArray = new Array();

  imagesArray = ['canada.jpg', 'china.jpg', 'egypt.jpg', 'hollywood.jpg', 'london.jpg', 'newyork.jpg', 'paris.jpg', 'sahara.jpg', 'sydney.jpg'];

  let randomNum = Math.floor(Math.random()*imagesArray.length);
  let img = imagesArray[randomNum];

  $(".modal-image").attr("src", img);
}
