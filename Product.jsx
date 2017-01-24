import React, { Component } from 'react';

class Product extends Component {


    addtocart(event) {
      alert("child: addtocart");
      console.log(this.props.item);
      this.props.addtocart(event, this.props.item);
    }

    dec() {

    }


    inc(item) {

    }

    render(){
        
        var item = this.props.item;

        return (

          <div id="product">      
            <img src={item.image} />
            <p> {item.brand}</p>
            <p> {item.product}</p>
            <p> {item.package}</p>
            <p> {item.price}</p>
            <button onClick={this.addtocart.bind(this)}>Add to Cart</button>
            <div> 
              <input type="button" value="-" onClick={this.dec.bind(this)}/>  
              {item.qty} in cart  
              <input type="button" value="+" onClick={this.inc.bind(this)}/>
            </div>
          </div>

        );
    }
};

export default Product;
















{/*<div id="product">      
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
</div>*/}