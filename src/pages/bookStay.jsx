import { useLocation, useParams, useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { stayService } from "../services/stay.service"
import { orderService } from '../services/order.service'
import { utilService } from '../services/util.service'
import { LoginSignup } from '../cmps/user/LoginSignup'
import { userService } from '../services/user.service'


export function BookStay() {

    const [order, setOrder] = useState()
    const [isBooked, setIsBooked] = useState(false)
    const [localUser, setLocalUser] = useState(null)

    const { stayId } = useParams()
    const location = useLocation()
    const navigate = useNavigate()
    const user = useSelector((state) => state.userModule.user)

    const searchParams = new URLSearchParams(location.search)
    const { checkIn, checkOut, guests, stayName } = Object.fromEntries(searchParams.entries())
    const cleaningFee = 6
    const serviceFee = 15
    // console.log('addedOrder', addedOrder)
    // console.log('order', order)
    console.log('localUser', localUser)


    useEffect(() => {
        async function loadData() {
            const userFromDb = await loadUser()
            loadOrderDetails()
        }
        loadData()
    }, [user])


    async function onConfirmBtn() {
        try {
            await saveOrder()
             updateUserDb()
            setIsBooked(true)
        } catch (err) {
            console.log('Had issues in booking', err);
        }
    }
    

    async function saveOrder() {
        try {
            const addedOrder = await orderService.save(order)
            setOrder(addedOrder)
            // setLocalUser((prevUser) => ({ ...prevUser, orders: [...prevUser.orders, addedOrder] }))
        } catch (err) {
            console.log('Had issues in booking', err)
        }
    }


    async function updateUserDb() {

        try {
            const updatedUser = { ...localUser, orders: [...localUser.orders, order] };
            setLocalUser(updatedUser)
           const savedUser = await userService.update(updatedUser)
            console.log('savedUser' , savedUser)
            console.log('User DB updated')

        } catch (err) {
            console.log('Had issues in updating user', err)
        }
    }


    async function loadUser() {
        try {
            if (!user) return
            const userFromDb = await userService.getById(user._id)
            setLocalUser(userFromDb)
        } catch (err) {
            console.log('Had issues in getting user', err)
        }
    }

    async function loadOrderDetails() {
        try {
            const stay = await stayService.getById(stayId)
            const orderToSet = handleOrder(stay)
            setOrder(orderToSet)
            // if(user) setLocalUser((prevUser) => ({ ...prevUser, orders: [...prevUser.orders, orderToSet] }))
        } catch (err) {
            console.log('Had issues loading reservation', err)
        }
    }

    function handleOrder(stay) {
        const orderToSet = orderService.getEmptyOrder()
        orderToSet.stayId = stayId
        orderToSet.stayName = stayName
        orderToSet.hostId = stay.host._id
        orderToSet.guests = JSON.parse(guests)
        orderToSet.startDate = +checkIn || Date.now()
        orderToSet.endDate = +checkOut || Date.now() + 1000 * 60 * 60 * 24
        orderToSet.totalDays = +utilService.totalDays(orderToSet.startDate, orderToSet.endDate)
        orderToSet.nightsPrice = +(orderToSet.totalDays * stay.price).toFixed(2)
        orderToSet.serviceFee = +((serviceFee * orderToSet.nightsPrice) / 100).toFixed(2)
        orderToSet.cleaningFee = +((cleaningFee * orderToSet.nightsPrice) / 100).toFixed(2)
        orderToSet.totalPrice = +(orderToSet.nightsPrice + orderToSet.cleaningFee + orderToSet.serviceFee).toFixed(2)
        orderToSet.renter = user || ''
        orderToSet.createdAt= +new Date()
        return orderToSet
    }

    function onMyTripsBtn() {

        navigate(`/trip`)
        // navigate(`/?txt=${filterBy.txt}&location=${filterBy.location}&guests=${guestsParams || 1}&checkIn=${filterBy.checkIn}&checkOut=${filterBy.checkOut}`)

    }



    return (
        <section className="book-stay">

            {user ? (
                <button className="confirm-btn" onClick={onConfirmBtn}> Confirm

                </button>
            ) : (
                // <OrderLoginModal/>
                <LoginSignup />
            )
            }

            {isBooked && (
                <section className='reservation-success'>
                    <h3 className="reservation-success-msg">
                        Reservation success!
                    </h3>
                    <button className="my-trips-btn" onClick={onMyTripsBtn}>
                        My trips
                    </button>
                </section>

            )}


        </section>
    )
}