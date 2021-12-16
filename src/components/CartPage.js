import React from 'react'
import StripeApp from './StripeApp'



function CartPage() {
    return (
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem'
        }}>
            <h1> Total</h1>
            <div><StripeApp /></div>
        </div>
    )
}

export default CartPage