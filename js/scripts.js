$('#button').click(function(){

document.getElementById("myImages").src = images[randomNum];

let images = ['images/canada.jpg', 'images/china.jpg', 'images/egypt.jpg', 'images/hollywood.jpg', 'images/london.jpg', 'images/newyork.jpg', 'images/paris.jpg', 'images/sahara.jpg', 'images/sydney.jpg'];

let randomNum = images[Math.floor(Math.random()*images.length)];
