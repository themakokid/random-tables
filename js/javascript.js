function generate() {

  document.getElementById('genbutton').innerHTML = "What else is there?";

  var randomNumber = Math.floor(Math.random() * locations.length);
  document.getElementById('locationsDisplay').innerHTML = "You find: " + locations[randomNumber];

  if (locations[randomNumber].indexOf('cottage') > -1) {
    var randomNumber = Math.floor(Math.random() * cottage.length);
    document.getElementById('locationsDisplay').insertAdjacentHTML('beforeend', "<br> The cottage is occupied by: " + cottage[randomNumber]);
  }

  else if (locations[randomNumber].indexOf('cave') > -1) {
    var randomNumber = Math.floor(Math.random() * cave.length);
    document.getElementById('locationsDisplay').insertAdjacentHTML('beforeend', "<br> Inside the cave is: " + cave[randomNumber]);
  }

  else if (locations[randomNumber].indexOf('cabin') > -1) {
    var randomNumber = Math.floor(Math.random() * cabinpast.length);
    var randomNumber2 = Math.floor(Math.random() * cabinpresent.length);
    document.getElementById('locationsDisplay').insertAdjacentHTML(
      'beforeend', "<br> The cabin was one home to: " + cabinpast[randomNumber] + " It is now occupied by " + cabinpresent[randomNumber2]);
  }

  else if (locations[randomNumber].indexOf('ruins') > -1) {
    var randomNumber = Math.floor(Math.random() * ruinsbuilder.length);
    var randomNumber2 = Math.floor(Math.random() * ruinslive.length);
    document.getElementById('locationsDisplay').insertAdjacentHTML(
      'beforeend', "<br> The ruins were built by: " + ruinsbuilder[randomNumber] + " It is now home to: " + ruinslive[randomNumber2]);
  }

  else if (locations[randomNumber].indexOf('burrow') > -1) {
    var randomNumber = Math.floor(Math.random() * burrow.length);
    document.getElementById('locationsDisplay').insertAdjacentHTML('beforeend', "<br> The burrow houses: " + burrow[randomNumber]);
  }

  var randomNumber = Math.floor(Math.random() * landmarks.length);
  document.getElementById('landmarksDisplay').innerHTML = "You see: " + landmarks[randomNumber];

  var randomNumber = Math.floor(Math.random() * notices.length);
  document.getElementById('noticesDisplay').innerHTML = "You notice: " + notices[randomNumber];

  var randomNumber = Math.floor(Math.random() * encounters.length);
  document.getElementById('encountersDisplay').innerHTML = "You come upon: " + encounters[randomNumber];

}
