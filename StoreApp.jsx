import React from 'react';
import Cart from './Cart.jsx';
import Products from './Products.jsx';

class StoreApp extends React.Component {

    // Constructor is responsible for setting up props and setting initial stte
    constructor(props){
        // Pass props to the parent component
        super(props);
        // Set initial state
        this.state = {
            // State needed
            items: [],
            cart: []
        };
    }

    componentDidMount(){
    	/*---------------------------------*/
    	var jsondataorig = { "products": [

    	{
    		"image":"smiley.gif",
    		"brand":"KPL",
    		"product":"prod",
    		"package":"pack",
    		"price": 123,
    		"qty":0
    	},

    	{
    		"image":"smiley.gif",
    		"brand":"PQR",
    		"product":"prod",
    		"package":"pack",
    		"price": 23,
    		"qty":0
    	},

    	{
    		"image":"smiley.gif",
    		"brand":"ABC",
    		"product":"prod",
    		"package":"pack",
    		"price": 899,
    		"qty":0
    	},

    	{
    		"image":"smiley.gif",
    		"brand":"XYZ",
    		"product":"prod",
    		"package":"pack",
    		"price": 555,
    		"qty":0
    	}

    	]};
    	/*---------------------------------*/

        // Update state
        this.setState({items: jsondataorig.products});
    }



    addtocart(event, item) {
    	alert("super parent: addtocart");
      	console.log(event.target);
      	alert(item.brand);

    	var cart1 = this.state.cart;
/*      item.qty++;*/
    	cart1.push(item);
    	console.log(cart1);
    	/*this.state.cart.push(item);*/
		/*     $scope.inc(item);
		$scope.calculateAmount();*/

    this.state.items.forEach(function(it){
       if(it.brand === item.brand) {
           item.qty++;
       }
    });


		this.setState({
			cart: cart1
		});
		console.log(this.state.cart);
	}


    removefromcart(event, index, item) {
    	alert("super parent: removefromcart");
      console.log(event.target);
      alert(index);

    	var cart1 = this.state.cart;
   		cart1.splice(index, 1);
    	console.log(cart1);

      this.state.items.forEach(function(it){
         if(it.brand === item.brand) {
           item.qty--;
         }
      });
/*    this.state.items[index].qty--;*/

		  this.setState({
			 cart: cart1
		  });

		  console.log(this.state.cart);
	}

    render() {

    	return (

    		<div>
    		<h1> GALE PRODUCT STORE </h1>

    		<div>

    		<Products products={this.state.items} addtocart={this.addtocart.bind(this)} />   {/*addtocart={this.addtocart()}*/}

{/*<div id="products">
<h2> Products Available </h2>
<div id="product">         ng-repeat="item in jsondata"
  <img src={item.image} />
  <p> {item.brand}</p>
  <p> {item.product}</p>
  <p> {item.package}</p>
  <p> {item.price}</p>
  <button ng-click="addtocart(item)" ng-show="item.qty == 0">Add to Cart</button>
  <div ng-show="item.qty > 0"> 
  	<input type="button" value="-" ng-click="dec(item)"/>  
    	{item.qty} in cart  
    <input type="button" value="+" ng-click="inc(item)"/>
  </div>
</div>
</div>*/}


<Cart cartitems={this.state.cart} removefromcart={this.removefromcart.bind(this)}/>

{/*<div id="cart">
  <h2> Cart </h2>
  <p> Items in Cart - {totalcartitems}</p>
  <p> Total Rs      - {totalRs} </p>
	<hr>
  <div id="cartitems">   ng-repeat="item in cart"
     <span> {item.brand}</span>
     <span> {item.product}</span>
     <span> {item.package}</span>
     <span> {item.price}</span>
     <span> {item.qty}</span>
     <span> <button ng-click="removefromcart($index)"> Remove </button> </span>
  </div>
    <hr>
</div>*/}

</div>

</div>
);
    }
}

export default StoreApp;
