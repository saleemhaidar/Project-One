var items = [
  {name: 'Nike Barricade', image: 'images/adidasbarricade2016.jpg', price:150,},
  {name: 'Harry Potter', image: 'images/HarryPotter.jpg', price: 25},
  {name: 'Hot Wheels Cars', image: 'images/HotWheels.jpeg', price: 12}
];

var myButton = document.getElementById('search');
myButton.addEventListener('click', function() {
  var searchText = document.getElementById('searchText');
  clear(document.getElementById('searchResult'));
  show(match(searchText.value, items));
});

var enterkey = document.getElementById('searchText');
enterkey.addEventListener('keypress', function(theEvent){
  // theEvent.preventDefault();
  if (theEvent.keyCode == 13){
  var searchText = document.getElementById('searchText');
  clear(document.getElementById('searchResult'));
  show(match(searchText.value, items));
}
});

// push to issue before moving on to match function.
function match(searchText, list) {
  var suggestions = [];
  list.forEach( function(item){
    if(item.name.toUpperCase().indexOf(searchText.toUpperCase()) !== -1) {
    suggestions.push(item);
    }
  });
  return suggestions;
}

 function show(items) {
   var searchResult = document.getElementById('searchResult');
   for (var i = 0; i < items.length; i++) {
     searchResult.appendChild(item(items[i]));
   }
 }
 function clear(area) {
   while (area.firstChild) {
     area.removeChild(area.firstChild);
   }
 }

 function item(data) {
   var container = document.createElement('div');
   container.setAttribute('class', 'col-md-4 col-md-offset-4 panel panel-default');

   var item = document.createElement('div');
   item.setAttribute('class', 'panel-body');

  var name = document.createElement('h3');
  name.textContent = data.name + ' ' + '$' + data.price;

  if (data.image) {
    var image = document.createElement('img');
    image.setAttribute('src', data.image);
    image.setAttribute('class', 'img-responsive col-md-4')
  }
  container.appendChild(item);
  item.appendChild(name);
  if (image) item.appendChild(image);
  return container;
}
