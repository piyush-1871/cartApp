import React from "react";

const Navbar = (props)=> {

    
    return (
        <div style={styles.nav}>
            <div style={styles.cartName}>
                <span>
                    Z
                </span>
                <span style={styles.cartName.span2}>
                    Kart
                </span>
            </div>
            <div style={styles.cartIconContainer}>
                <img style={styles.cartIcon} 
                src="https://cdn-icons-png.flaticon.com/512/34/34568.png" 
                alt="cart-icon"
                />
                <span style={styles.cartCount}>{props.count}</span>
            </div>
        </div>
    )
    
}

const styles = {
    cartIcon : {
        height : 32,
        marginRight : 20
    },
    nav : {
        height : 70,
        width : '100%',
        background : '#4267b2',
        display : 'flex',
        justifyContent : 'space-between',
        alignItems : 'center'
    },
    cartName : {
        fontSize : '3rem',
        color : 'white',
        marginLeft : '1.5rem',
        fontFamily : 'Arial',
        span2 : {
            color : 'yellow'
        }


    },
    cartIconContainer : {
        position : 'relative'
    },
    cartCount : {
        background : 'yellow',
        borderRadius : '50%',
        padding : '4px 8px',
        position : 'relative',
        left : '-1.8rem',
        top : '-1rem'
    }
}

export default Navbar;