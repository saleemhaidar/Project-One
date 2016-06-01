var items = [
  {name: 'Nike Barricade', price:150},
  {name: 'Harry Potter', price: 25},
  {name: 'Hot Wheels Cars', price: 12}
];

var myButton = document.getElementById('search');
myButton.addEventListener('click', function() {
  var searchText = document.getElementById('searchText');
  show(match(searchText.value, items));
});


// push to issue before moving on to match function.
function match(searchText, list) {
  var suggestions = [];
  list.forEach( function(item){
    if(item.name.indexOf(searchText) !== -1) {
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

 function item(data) {
   var container = document.createElement('div');
   container.setAttribute('class', 'col-md-2 panel panel-default');

   var item = document.createElement('div');
   item.setAttribute('class', 'panel-body');

  var name = document.createElement('h3');
  name.textContent = data.name;

  container.appendChild(item);
  item.appendChild(name);
  return container;
}
