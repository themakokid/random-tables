var randoms = [
  'Random1',
  'Random2',
  'Random3',
  'Random4'
];

function generate() {
 
  var randomNumber = Math.floor(Math.random() * randoms.length);
  document.getElementById('randomDisplay').innerHTML = randoms[randomNumber];
  
}
