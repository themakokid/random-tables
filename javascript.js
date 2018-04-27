function rando() {
  
  var randoms = [
  'Random1',
  'Random2',
  'Random3',
  'Random4'
];
  
  var randomNumber = Math.floor(Math.random() * randoms.length);
  document.getElementbyId('randoDisplay').innerHTML = randoms[randomNumber];
  
}
