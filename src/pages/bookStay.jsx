import { useLocation, useParams, useSearchParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { stayService } from "../services/stay.service"
import { orderService } from '../services/order.service'
import { utilService } from '../services/util.service'
import { LoginSignup } from '../cmps/user/LoginSignup'


export function BookStay() {

    const [order, setOrder] = useState()
    const user = useSelector((state) => state.userModule.user)
    // console.log(user)
    const { stayId } = useParams()
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const { checkIn, checkOut, guests } = Object.fromEntries(searchParams.entries())
    const cleaningFee = 6
    const serviceFee = 15

    // console.log('order', order)

    useEffect(() => {
        loadOrderDetails()

    }, [user])

    async function onConfirmBtn() {
        try {
            await orderService.save(order)
            // setIsBooked(true)
            // console.log('isBooked', isBooked)
        } catch (err) {
            console.log('Had issues in booking', err)
        }

    }
    // setOrder(prev => ({ ...prev, renter: user }))

    async function loadOrderDetails() {
        try {
            const stay = await stayService.getById(stayId)
            const orderToSet = handleOrder(stay)
            setOrder(orderToSet)
            // console.log('orderToSet', orderToSet)

        } catch (err) {
            console.log('Had issues loading reservation', err)
            // navigate('/')
        }
    }

    function handleOrder(stay) {
        const orderToSet = orderService.getEmptyOrder()
        orderToSet.stayId = stayId
        orderToSet.hostId = stay.host._id
        orderToSet.guests = JSON.parse(guests)
        orderToSet.startDate = checkIn || Date.now()
        orderToSet.endDate = checkOut || Date.now() + 1000 * 60 * 60 * 24
        orderToSet.totalDays = +utilService.totalDays(orderToSet.startDate, orderToSet.endDate)
        orderToSet.nightsPrice = +(orderToSet.totalDays * stay.price).toFixed(2)
        orderToSet.serviceFee = +((serviceFee * orderToSet.nightsPrice) / 100).toFixed(2)
        orderToSet.cleaningFee = +((cleaningFee * orderToSet.nightsPrice) / 100).toFixed(2)
        orderToSet.totalPrice = +(orderToSet.nightsPrice + orderToSet.cleaningFee + orderToSet.serviceFee).toFixed(2)
        orderToSet.renter= user || ''
        // console.log(orderToSet)
        return orderToSet
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

        </section>
    )
}