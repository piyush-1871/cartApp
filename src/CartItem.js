import React from "react";

class CartItem extends React.Component{
    constructor (){
        super()
        this.state = {
            price : 999,
            title : 'Mobile Phone',
            qty : 1,
            image : ''
        }
        // this.testing();
    }

    // testing() {
    //     const promise = new Promise((resolve , reject)=>{
    //         setTimeout(()=>{
    //             resolve('done');

    //         }, 5000);
    //     })

    //     promise.then(()=>{
    //         // setstate acts like synchronous call
    //         this.setState({qty: 100});
    //         console.log('state', this.state);
    //     })
    // }
    increaseQuantity = ()=>{
        // set state form 1 --> Shallow merging
        
        // this.setState({
        //     qty : this.state.qty + 1
        // }, ()=>{});

        // setstate form 2 --> if prevState is required use this form
        this.setState((prevState)=>{

            return {
                qty : prevState.qty + 1,
                // price : prevState.price + 
            }
        }, ()=>{
            console.log('this.state', this.state);
        });
        


    }

    decreaseQuantity = ()=>{
        const {qty} = this.state;

        if(qty === 0){
            return;
        }
        this.setState((prevState)=>{
            return {
                qty : prevState.qty - 1
            }
        } ,()=>{
            console.log('this.state', this.state);
        })


    }
    render (){
        console.log('render');
        const {price,title,qty} = this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} alt=""/>
                </div>
                <div className="right-block">
                    <div style={ {fontSize : 25} }>{title}</div>
                    <div style={ {color : '#777'} }>Rs {price}</div>
                    <div style={ {color : '#777'} }>Qty : {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <img 
                            alt="increase" 
                            onClick= {this.increaseQuantity.bind(this)}
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/1828/1828925.png" 
                        />
                        <img 
                            alt="decrease" 
                            onClick={ this.decreaseQuantity.bind(this) }
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                        />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/1/1570.png" 
                        />
                    </div>
                </div>

            </div>
        );
    }
}
const styles = {
    image : {
        height : 110,
        width : 110,
        borderRadius : 4,
        background : '#ccc'
    }
}
export default CartItem;