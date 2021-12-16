import React from 'react'
import StripeApp from './StripeApp'



function CartPage() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center'
        }}>
           <StripeApp /></div>
        
    )
}

export default CartPage