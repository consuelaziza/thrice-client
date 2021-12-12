import React from 'react'
import {useContext} from 'react';
import {UserContext} from '../components/../context/app.context'

function HistoryPage() {
    const {user} = useContext(UserContext)

    return (
        <div style={{ width: '80%', margin: '3rem auto' }}>
            <div style={{ textAlign: 'center' }}>
                <h1>History</h1>
            </div>
            <br />

            <table>
                <thead>
                    <tr>
                        <th>Payment Id</th>
                        <th>Price</th>
                        <th>Date of Purchase</th>
                    </tr>
                </thead>

                <tbody>

                    {
                        user.history.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.price}</td>
                        
                            </tr>
                        ))}


                </tbody>
            </table>
        </div>
    )
}

export default HistoryPage
