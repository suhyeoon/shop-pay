import React from 'react'

function History(props) {
    return (
        <div style={{ width: '80%', margin: '3rem auto' }}>
            <div style={{ textAlign: 'center' }}>
                <h1>History</h1>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Payment Id</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Date of Purchase</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.user.userData &&
                        props.user.userData.history &&
                        props.user.userData.history.map((product) => {
                            return (
                                product.map((item) => {
                                    return (
                                        <tr key={item.id}>
                                            <td>{item.name}</td>
                                            <td>{item.price}</td>
                                            <td>{item.quantity}</td>
                                            <td>{item.purchaseDate}</td>
                                        </tr>
                                    )
                                })
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default History