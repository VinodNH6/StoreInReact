import React, { Component } from 'react';

class Product extends Component {


    addtocart(event) {
      alert("child: addtocart");
      console.log(this.props.item);
      this.props.addtocart(event, this.props.item);
    }

    dec() {

    }


    inc() {

    }


    checkitemsqty(item) {
      alert(item.qty);
            if(item.qty == 0) {   /*this.props.*/
              return <button onClick={this.addtocart.bind(this)}>Add to Cart</button>;
            }
            else {
              return <div> <input type="button" value="-" onClick={this.dec.bind(this)}/>  {item.qty} in cart  <input type="button" value="+" onClick={this.inc.bind(this)}/> </div>;
            }
            return <p> NOT AVAILABLE</p>;
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

{/*            if(item.qty === 0)
            {
              <button onClick={this.addtocart.bind(this)}>Add to Cart</button>
            }
            else
            {
              <div> 
                <input type="button" value="-" onClick={this.dec.bind(this)}/>  
                {item.qty} in cart  
                <input type="button" value="+" onClick={this.inc.bind(this)}/>
              </div>
            }*/}

            {this.checkitemsqty(item)}

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
