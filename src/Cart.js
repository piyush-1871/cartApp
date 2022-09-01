import React from "react";
import CartItem from "./CartItem";
class Cart extends React.Component{
    constructor (){
        super()
        this.state = {
            products : [
                {
                    price : 2000,
                    title : 'Watch',
                    qty : 1,
                    image : '',
                    id : 1
                },
                {
                    price : 14999,
                    title : 'Mobile Phone',
                    qty : 1,
                    image : '',
                    id : 2
                },
                {
                    price : 65000,
                    title : 'Laptop',
                    qty : 1,
                    image : '', 
                    id : 3
                }
            ]
        }
        // this.testing();
    }
    render(){
        const {products} = this.state;
        return (
            <div className="cart">
                {products.map((product)=>{
                return (
                    <CartItem  product={product}  key={product.id} />
                )
                
                })}
            
            </div>
        )
    }
}

export default Cart;