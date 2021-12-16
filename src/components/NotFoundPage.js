import React from 'react'
import PageNotFound from './PageNotFound.png'
import {Link} from 'react-router-dom'

function NotFoundPage() {
    return (
        <div>
            <img src={PageNotFound}  alt='page not found'/>
            <p style={{textAlign:"center"}}>
              <Link to="/">Go to Home </Link>
            </p>
        </div>
    )
}

export default NotFoundPage
