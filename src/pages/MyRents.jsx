import { useEffect } from "react"
import { useState } from "react"
import { orderService } from "../services/order.service.js"
import { DashDropdown } from "../cmps/orders/DashboardDropdown.jsx"
import PieChartt from "../cmps/user/PieChart.jsx"
import MyBarChart from '../cmps/orders/BarChart.jsx'
import MyAreaChart from "../cmps/user/MyAreaChart.jsx"
import MyPieChart from '../cmps/user/MyPieChart.jsx'

import { LineChart, Line } from 'recharts';
// import { RadarChart, Line } from 'recharts';

import { setFooterToDisplay } from '../store/stay.actions.js'




export function MyRents() {
    const [orders, setOrders] = useState([])
    const [orderToChange, setOrderToChange] = useState(null)

    const dataBar = [
        { name: 'Page A', uv: 200, pv: 2400, amt: 240 },
        { name: 'Page B', uv: 250, pv: 2400, amt: 240 },
        { name: 'Page C', uv: 300, pv: 2400, amt: 2400 },
        { name: 'Page D', uv: 400, pv: 240, amt: 2400 },
        { name: 'Page E', uv: 400, pv: 2400, amt: 2400 }

    ]


    useEffect(() => {
        setFooterToDisplay(false)
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
                <h2 className="orders-header">Performance</h2>


                <section className="dash-info-container">
                    <section className="dash-info">
                        <MyBarChart orders={orders} />

                    </section>
                    <section className="dash-info pie">

                        <LineChart width={225} height={225} data={dataBar}>
                            <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                        </LineChart>
                        <LineChart width={225} height={225} data={dataBar}>
                            <Line type="monotone" dataKey="amt" stroke="#8884d8" />
                        </LineChart>
                        {/* < PieChartt /> */}
                    </section>
                    <section className="dash-info bar">
                        {/* <MyBarChart /> */}
                    </section>
                    <section className="dash-info area">
                        {/* < PieChartt /> */}

                        {/* <MyPieChart/> */}
                    </section>



                </section>


                <h2 className="table-header">My orders</h2>
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
                            const dynClass = order.status

                            return (
                                <tr key={order._id}>
                                    <td>{order.stayName}</td>
                                    <td>{new Date(order.startDate).toLocaleDateString('en-US')}</td>
                                    <td>{new Date(order.endDate).toLocaleDateString('en-US')}</td>
                                    <td className='guests-count-td'>{getGuestsCount(order.guests)}</td>
                                    <td>{order.totalPrice}</td>
                                    <td>
                                        <span className='status'>
                                            <span className={`colorful-dot ${dynClass}`}></span>

                                            {order.status}
                                        </span>


                                    </td>
                                    <td>
                                        <button onClick={() => handleOrderChange(order._id, 1)} >Approve</button>
                                        <DashDropdown order={order} handleOrderChange={handleOrderChange} />
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