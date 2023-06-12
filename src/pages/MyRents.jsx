import { useEffect } from "react"
import { useState } from "react"
import { orderService } from "../services/order.service.js"


export function MyRents() {
    const [orders, setOrders] = useState([])
    const [orderToChange, setOrderToChange] = useState(null)

    useEffect(() => {
        loadOrders()
    }, [])

    useEffect(() => {
        if (orderToChange) {
            orderService.save(orderToChange)
        }

    }, [orderToChange])


    async function loadOrders(filterBy = "") {
        const orders = await orderService.query(filterBy)
        setOrders(orders)

    }

    function getGuestsCount(guests) {
        const guestsCount = Object.values(guests)
            .reduce((accumulator, curorderValue) => accumulator + curorderValue, 0);
        return guestsCount
    }

    function findCurorderOrder(orderId) {
        const currOrder = orders.find(order => order._id === orderId)
        return currOrder
    }

    function handleOrderChange(orderId, descision) {
        console.log('handleOrederChange', orderId)
        const answer = descision ? 'Approved' : 'Canceled'
        const currOrder = findCurorderOrder(orderId)
        currOrder.status = answer
        setOrders(prevOrders =>
            prevOrders.map(order =>
                order._id === orderId ? { ...order, status: answer } : order
            )
        )
        setOrderToChange(currOrder)
    }



    return (
        <div className="my-orders">
            {(!orders || !orders.length) && <h2>Get help with getting Orders!</h2>}

            <section className='orders container'>
                <h2 className="orders-header">My orders</h2>

                <table className='orders-table'>
                    <thead>
                        <tr key="key">
                            <th key="key1" >Stay</th>
                            <th key="key2" >Arrival</th>
                            <th key="key3" >Departure</th>
                            <th key="key4" >Guests</th>
                            <th key="key5" >Total price</th>
                            <th key="key6" >Status</th>
                            <th key="key7" >Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => {
                            return (
                                <tr key={order._id}>
                                    <td>{order.stayName}</td>
                                    <td>{new Date(order.startDate).toLocaleDateString('en-US')}</td>
                                    <td>{new Date(order.endDate).toLocaleDateString('en-US')}</td>
                                    <td>{getGuestsCount(order.guests)}</td>
                                    <td>{order.totalPrice}</td>
                                    <td>{order.status}</td>
                                    <td>
                                        <button onClick={() => handleOrderChange(order._id, 1)} >Approve</button>
                                        <button onClick={() => handleOrderChange(order._id, 0)} >Cancel</button>
                                    </td>
                                </tr>

                            )
                        })}
                    </tbody>
                </table>

            </section>



        </div>
    )
}