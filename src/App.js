import React from 'react';
import Cart from './Cart'
import Navbar from './Navbar'

class App extends React.Component {

  constructor (){
    super()
    this.state = {
        products : [
            {
                price : 2000,
                title : 'Watch',
                qty : 1,
                image : 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                id : 1
            },
            {
                price : 14999,
                title : 'Mobile Phone',
                qty : 1,
                image : 'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW9iaWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
                id : 2
            },
            {
                price : 65000,
                title : 'Laptop',
                qty : 1,
                image : 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60', 
                id : 3
            }
        ]
    }

    // this.testing();
  }
  handleIncreaseQuantity = (product)=>{

      const {products} = this.state;
      const index = products.indexOf(product);

      products[index].qty += 1;

      this.setState({
          products 
      })
  }
  handleDecreaseQuantity = (product)=>{
      const {products} = this.state;
      const index = products.indexOf(product);

      if(products[index].qty === 0){
          return;
      }

      products[index].qty -= 1;

      this.setState({
          products
      })
  }

  handleDeleteProduct = (id)=>{
      const {products} = this.state;

      const items = products.filter((item) => item.id !== id);

      this.setState({
          products : items
      })
  }
  getCartCount = ()=>{
    const {products} = this.state;

    let count = 0;

    products.forEach((product)=>{
      count += product.qty;
    })
    return count;
  } 

  getCartTotal = ()=>{
    const {products} = this.state;
    let cartTotal = 0;
    products.map((product)=>{
      cartTotal += product.qty * product.price;
    });
    return cartTotal;
  }

  render(){
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart 
          products = {products}
          onIncreaseQuantity = {this.handleIncreaseQuantity}
          onDecreaseQuantity = {this.handleDecreaseQuantity}
          onDeleteProduct = {this.handleDeleteProduct}
        />
        <div style={{fontSize:20 , padding:10}}>TOTAL: {this.getCartTotal()}</div>
      </div>
      
    );
  }
  
}

export default App;
