console.log('Hello World');

var square = document.getElementsByClassName('square')[0];
var counter = document.getElementsByClassName('counter');
var paragraphs = document.getElementsByTagName('p');
var newParagraph = document.createElement('p');
var textDiv = document.getElementsByClassName('text')[0];

square.addEventListener('mouseover', function(event) {
  console.log(event);
  console.log('Inside the square');
  square.style.backgroundColor = 'red';
});

square.addEventListener('mouseout', function() {
  console.log('Outside the square');
  square.style.backgroundColor = 'green';
});

square.addEventListener('click', function() {
  for (var i = 0; i < counter.length; i++) {
    counter[i].innerText++;
  }
});

textDiv.addEventListener('click', function() {
  console.log('You clicked me.');
});

newParagraph.innerText = "Hey I'm the second P";
textDiv.appendChild(newParagraph);
