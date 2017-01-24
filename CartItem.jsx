import React from 'react';

class CartItem extends React.Component {


	removefromcart(event) {
		alert("child: removefromcart");
      	console.log(event.target);
      	alert(this.props.index);
      	this.props.removefromcart(event, this.props.index);
	}

   	render() {

   		var item = this.props.item;

   		return (
  					<div id="cartitems"> 
     					<span> {item.brand}</span>
     					<span> {item.product}</span>
     					<span> {item.package}</span>
     					<span> {item.price}</span>
     					<span> {item.qty}</span>
     					<span> <button onClick={this.removefromcart.bind(this)}> Remove </button> </span>
  					</div>
   		);
   	}

}

export default CartItem;