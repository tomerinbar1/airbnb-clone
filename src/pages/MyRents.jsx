import { useEffect } from "react"
import { useState } from "react"
import { orderService } from "../services/order.service.js"


export function MyRents() {
    const [rents, setRents] = useState([])

    useEffect(() => {
        loadRents()
    }, [])


    async function loadRents(filterBy = "") {
        const rents = await orderService.query(filterBy)
        setRents(rents)

    }

    function getGuestsCount(guests) {
        const guestsCount = Object.values(guests)
            .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        return guestsCount
    }



    return (
        <div className="my-rents">
            {(!rents || !rents.length) && <h2>Get help with getting Orders!</h2>}

            <section className='rents container'>
                <h2 className="rents-header">My rents</h2>

                <table className='rents-table'>
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
                        {rents.map(rent => {
                            return (
                                <tr key={rent._id}>
                                    <td>{rent.stayName}</td>
                                    <td>{new Date(rent.startDate).toLocaleDateString('en-US')}</td>
                                    <td>{new Date(rent.endDate).toLocaleDateString('en-US')}</td>
                                    <td>{getGuestsCount(rent.guests)}</td>
                                    <td>{rent.totalPrice}</td>
                                    <td>{rent.status}</td>
                                    <td>
                                        <button >Approve</button>
                                        <button >Cancel</button>
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