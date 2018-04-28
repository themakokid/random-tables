function genlocation() {

  var randomNumber = Math.floor(Math.random() * locations.length);
  document.getElementById('locationsDisplay').innerHTML = "You find:" + locations[randomNumber];
}

function genlandmark() {

  var randomNumber = Math.floor(Math.random() * landmarks.length);
  document.getElementById('landmarksDisplay').innerHTML = "You see:" + landmarks[randomNumber];
}
