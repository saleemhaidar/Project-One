var items = [
  {id: 1, name: 'Nike Barricade', image: 'images/adidasbarricade2016.jpg', price: 150, count: 1},
  {id: 2, name: 'Harry Potter', image: 'images/HarryPotter.jpg', price: 25, count: 1},
  {id: 3, name: 'Hot Wheels Cars', image: 'images/HotWheels.jpeg', price: 12, count: 1},
];

var cart = {
  items: []
}

function add(item) {
    // if the cart already has this type of item
    if (cart.items.includes(item)) {
      // if the item count will be greater than five then do nothing
      if ((item.count + 1) > 5) {
        alert("this is too many items");
        return;
      // otherwise add an item
      } else {
        item.count++;
      }
    // otherwise add the item for the first time
    } else {
      cart.items.push(item);
    }
    document.getElementById('counter').textContent++;
}

function swap(next, location){
  var old = document.getElementsByClassName('current')[0];
  old.classList.remove('current');
  old.classList.add('hide');
  location.appendChild(next);
  next.classList.add('current');
  next.classList.remove('hide');
};

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

 function findItemById(items, itemId) {
 for (var i = 0; i < items.length; i++) {
   if (items[i].id == itemId) {
     return items[i];
     }
   }
 }

 function removeItemById(items, itemId) {
   for (var i = 0; i < items.length; i++) {
     if(items[i].id == itemId){
     items.splice(i, 1);

   }
   }
 }

 function decrementBadge(badge, value){
   badge.textContent -= value;
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
    add(data);
  });

  container.appendChild(subContainer);
  subContainer.appendChild(item);
  item.appendChild(name);
  item.appendChild(image);
  footer.appendChild(addToCart);
  subContainer.appendChild(footer);
  return container;
}

function cartItem(details){
  var cartBody = document.getElementById('Cart')
  var detailBox = document.createElement('div');
  detailBox.setAttribute('class', 'theItem');

  var subBox = document.createElement('div');
  subBox.setAttribute('class', 'panel panel-default subBoxitem')

  var item = document.createElement('div');
  item.setAttribute('class', 'panel-body');

  var name = document.createElement('h3');
  name.textContent = details.name + ' ' + '$' + details.price //+ ' ' + details.count;

  var image = document.createElement('img');
  image.setAttribute('src', details.image);
  image.setAttribute('class', 'img-responsive col-md-4');

  var removeIcon = document.createElement('i');
  removeIcon.setAttribute('data-id', details.id);
  removeIcon.setAttribute('class', 'glyphicon glyphicon-remove pull-right rIcon')

  var selectBox = document.createElement('select');
  selectBox.setAttribute('class', 'theSelect' );
  for (var i = 1; i < 6; i++) {
    var myOption = document.createElement('option');
    if (details.count == i) {
      myOption.setAttribute('selected', 'true');
    }
    myOption.value = i;
    myOption.text = i;
    selectBox.appendChild(myOption);
   //  appendChild inside the loop.
  }

  cartBody.appendChild(detailBox);
  detailBox.appendChild(subBox);
  item.appendChild(removeIcon);
 //  subBox.appendChild(removeButton);
  subBox.appendChild(item);
  item.appendChild(name);
  item.appendChild(image);
  item.appendChild(selectBox);
  selectBox.appendChild(myOption);
//remove the item when the removeIcon is clicked
  removeIcon.addEventListener('click', function(theEvent) {
    //find the the attribute data-id and store it in index.
    var id = theEvent.target.getAttribute('data-id');
    var quantity = findItemById(cart.items, id).count
    removeItemById(cart.items, id);
    decrementBadge(document.getElementById('counter'), quantity);

    clear(detailBox);

  });
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
  swap(searchResult, view);
  clear(document.getElementById('searchResult'));
  show(match(searchText.value, items));
}
});

var cartActive = false;
var myCart = document.getElementById('cartIcon');
myCart.addEventListener('click', function(theEvent){
  if (!cartActive) {
    var theCart =  document.getElementById('Cart');
    var view = document.getElementsByClassName('view')[0];
    var items = document.getElementsByClassName('theItem');
    while (items[0]) {
      items[0].parentNode.removeChild(items[0]);
    }

    swap(theCart, view);
    for (var i = 0; i < cart.items.length; i++) {
      cartItem(cart.items[i]);
    }
  }
});
