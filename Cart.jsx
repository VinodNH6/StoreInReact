import React from 'react';
import CartItem from './CartItem.jsx';

class Cart extends React.Component {

    constructor(props) {
      console.log("constructor");
      super(props);
      this.state = {
        totalcartitems: props.cartitems,
        totalRs: 0
      };
      console.log(this);
    }


    componentDidMount(){
        console.log("While Mounting..");
        console.log(this);
        this.calculateAmount();
    }


    calculateAmount() {
      /*totalRs = 0;*/
      console.log("calculateAmount");
      
      var totalRs = 0; 
      this.props.cartitems.forEach(function(item) {
          totalRs = totalRs + item.price;
      }); 
      var totalcartitems = this.props.cartitems.length;

      this.setState({
        totalcartitems: totalcartitems,
        totalRs: totalRs
      });
    };


    removefromcart(event, index) {
      alert("parent: removefromcart");
      console.log(event.target);
      alert(index);
      this.props.removefromcart(event, index);
    }

   	render() {

        var result = this.props.cartitems.map( (item,index) => {
            return <CartItem key={index} index={index} item={ item } removefromcart={this.removefromcart.bind(this)} />
        });

      	return (
         	<div>
            	<h2> CART </h2>

              <div id="cart">
                  <p> Items in Cart - {this.state.totalcartitems}</p>
                  <p> Total Rs      - {this.state.totalRs} </p>

                  {result}

              </div>
          </div>
		);
  }
}

export default Cart;