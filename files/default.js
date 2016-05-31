var items = [
  {name: 'Nike Barricade', price:150},
  {name: 'Harry Potter', price: 25},
  {name: 'Hot Wheels Cars', price: 12}
];

var myButton = document.getElementById('search');
myButton.addEventListener('click', function(){
  var searchText = document.getElementById('searchText');
  console.log(match(searchText.value, items));
});


// push to issue before moving on to match function.
function match(searchText, list){
var suggestions = [];
list.forEach( function(item){
  if(item.name.indexOf(searchText) !== -1)
  suggestions.push(item);

})
return suggestions;
}
