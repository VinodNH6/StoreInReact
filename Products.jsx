import React from 'react';
import Product from './Product.jsx';

class Products extends React.Component {


    addtocart(event, value) {
      alert("parent: addtocart");
      console.log(event.target);
      alert(value.brand);
      this.props.addtocart(event, value);
    }


    render() {

        var result = this.props.products.map( (product,index) => {
            return <Product key={index} item={product} addtocart={this.addtocart.bind(this)} />
        });


        return (

          <div>

                  <div id="products">
                    <h2> Products Available </h2>
                      {/*<div id="product">         ng-repeat="item in jsondata"
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
                
                    {result}

                  </div>

          </div>
        );
    }
}


export default Products;

