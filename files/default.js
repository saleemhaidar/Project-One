var items = [
  {id: 1, name: 'Nike Barricade', image: 'images/adidasbarricade2016.jpg', price:150,},
  {id: 2, name: 'Harry Potter', image: 'images/HarryPotter.jpg', price: 25},
  {id: 3, name: 'Hot Wheels Cars', image: 'images/HotWheels.jpeg', price: 12}
];

var cart = {
  items: []
}

var myButton = document.getElementById('search');
myButton.addEventListener('click', function() {
  var searchText = document.getElementById('searchText');
  var view = document.getElementsByClassName('view')[0];
  swap(searchResult, view);
  clear(document.getElementById('searchResult'));
  show(match(searchText.value, items));
});

var enterkey = document.getElementById('searchText');
enterkey.addEventListener('keypress', function(theEvent){
  if (theEvent.keyCode == 13){
  var searchText = document.getElementById('searchText');
  var view = document.getElementsByClassName('view')[0];
  clear(document.getElementById('searchResult'));
  show(match(searchText.value, items));
  swap(searchResult, view);
}
});

var goToCart =document.getElementById('cartIcon');
goToCart.addEventListener('click', function(){

})

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

 function cartItem(details){
   var cartBody = document.getElementById('Cart')
   var detailBox = document.createElement('div');
   detailBox.setAttribute('clss', 'col-md-4 col-md-offset-4');

   var subBox = document.createElement('div');
   subBox.setAttribute('class', 'panel panel-default')

   var item = document.createElement('div');
   item.setAttribute('class', 'panel-body');

   var name = document.createElement('h3');
   name.textContent = details.name + ' ' + '$' + details.price;

   if (details.image) {
     var image = document.createElement('img');
     image.setAttribute('src', details.image);
     image.setAttribute('class', 'img-responsive col-md-4');
   }

   var footer = document.createElement('div');
   footer.setAttribute('class', 'panel-footer panel-default');

   var buy = document.createElement('button');
   buy.setAttribute('class', 'btn btn-default');
   buy.textContent = "Proceed With Purchase";

   cartBody.appendChild(detailBox);
   detailBox.appendChild(subBox);
   subBox.appendChild(item);
   item.appendChild(name);
   if(image) item.appendChild(image);
   subBox.appendChild(footer);
   footer.appendChild(buy);
 }

 function item(data) {
   var container = document.createElement('div');
   container.setAttribute('class', 'col-md-4 col-md-offset-4');

   var subContainer = document.createElement('div');
   subContainer.setAttribute('class', 'panel panel-default');

   var item = document.createElement('div');
   item.setAttribute('class', 'panel-body');

  var name = document.createElement('h3');
  name.textContent = data.name + ' ' + '$' + data.price;


    var image = document.createElement('img');
    image.setAttribute('src', data.image);
    image.setAttribute('class', 'img-responsive col-md-4')


  var footer = document.createElement('div');
  footer.setAttribute('class', 'panel-footer panel-default');

  var addToCart = document.createElement('button');
  addToCart.setAttribute('id', data.id);
  addToCart.setAttribute('class', 'btn btn-default');
  addToCart.textContent = "Add To Cart";

  addToCart.addEventListener('click', function(theEvent) {
    add(data.id, items);

  });

  container.appendChild(subContainer);
  subContainer.appendChild(item);
  item.appendChild(name);
  item.appendChild(image);
  footer.appendChild(addToCart);
  subContainer.appendChild(footer);
  return container;
}

function add(itemId, items) {
  for (var i = 0; i < items.length; i++) {
    if (items[i].id == itemId) {
      cart.items.push(items[i]);
      document.getElementById('counter').textContent++;
    }
  }
}
function swap(next, location){
  var old = document.getElementsByClassName('current')[0];
  old.classList.remove('current');
  old.classList.add('hide');
  location.appendChild(next);
  next.classList.add('current');
  next.classList.remove('hide');
};

var myCart = document.getElementById('cartIcon');
myCart.addEventListener('click', function(theEvent){
var theCart =  document.getElementById('Cart');
var view = document.getElementsByClassName('view')[0];
  swap(theCart, view);
  for (var i = 0; i < cart.items.length; i++) {
    cartItem(cart.items[i]);
  }
});
