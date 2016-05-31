var items = [
  {name: 'Nike Barricade', price:150},
  {name: 'Harry Potter', price: 25},
  {name: 'Hot Wheels Cars', price: 12}
];

var myButton = document.getElementById('search');
myButton.addEventListener('click', function(){
  var searchText = document.getElementById('searchText');
  console.log(searchText);
});
