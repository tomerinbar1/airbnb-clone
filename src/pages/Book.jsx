// import { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom'
// import { stayService } from '../services/stay.service'
import { StayReviewsStat } from '../cmps/details/StayReviewsStat'

import { useLocation, useParams, useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { stayService } from "../services/stay.service"
import { orderService } from '../services/order.service'
import { utilService } from '../services/util.service'
import { LoginSignup } from '../cmps/user/LoginSignup'
import { userService } from '../services/user.service'


export const Book = () => {
  const [stay, setStay] = useState(null)
  // const { stayId } = useParams()

  const { stayId } = useParams()
  const [order, setOrder] = useState(null)
  const [isBooked, setIsBooked] = useState(false)
  const [localUser, setLocalUser] = useState(null)

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


  useEffect(() => {
    getStay()
  }, [])





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

function getGuestsCount() {
  const guestsCount = Object.values(order.guests)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  // console.log('guestsCount' , guestsCount)
  return guestsCount
}




  async function getStay() {
    const stay = await stayService.getById(stayId)
    setStay(stay)
  }

  if (!stay || !order) return <div>Loading...</div>

  const { name, type, imgUrls, reviews } = stay

  return (
    <div className="book-page-wrapper">
      <div className="book-details-header">
        <h1>Request to book</h1>
        <button className="book-return-btn">{'\u003C'}</button>
      </div>
      <main className="book-page-main">
        <section className="book-details-wrapper">
          <div className="book-details">
            <h2>Your trip</h2>
            <div className="book-details-trip-info">
              <div className="book-details-trip-date">
                <div className="date-info">
                  <h3>Dates</h3>
                  {/* <p>Jun 10 - 15</p> */}
                  {utilService.formattedDate(order.startDate)} -{' '}
                    {utilService.formattedDate(order.endDate)}
                </div>
                <div className="book-details-edit">
                  <a href="#">Edit</a>
                </div>
              </div>
              <div className="book-details-trip-guests">
                <div className="guest-info">
                  <h3>Guests</h3>
                  {/* <p>1 guest</p> */}
                  {getGuestsCount()} <span>guests</span>
                </div>
                <div className="book-details-edit">
                  <a href="#">Edit</a>
                </div>
              </div>
            </div>

            <hr className="custom-hr" />
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

            <div className="book-payments-form">
              <h2>Choose how to pay</h2>
            </div>

            <hr className="custom-hr" />

            <div className="book-required">
              <h2>Required for your trip</h2>
              <div className="required-info">
                <div className="message">
                  <div className="host-contact-details">
                    <h3>Message the Host</h3>
                    <p>
                      Let the host know why you’re travelling and when you’ll
                      check in.
                    </p>
                  </div>

                  <button className="book-add-btn">Add</button>
                </div>

                <div className="phone-number">
                  <div className="host-contact-details">
                    <h3>Phone number</h3>
                    <p>
                      Add and confirm your phone number to get trip updates.
                    </p>
                  </div>
                  <button className="book-add-btn">Add</button>
                </div>
              </div>
            </div>

            <hr className="custom-hr" />

            <div className="book-terms"></div>
          </div>
        </section>
        <section className="book-summary-details">
          <div className="order-details">
            <div className="order-details-header">
              <img src={imgUrls[1]} alt="" />
              <div className="book-stay-basic-wrapper">
                <div className="order-details-header-text">
                  <div className="book-stay-basic">
                    <h5>{type}</h5>
                    <h3>{name}</h3>
                  </div>
                </div>
                <div className="book-stay-reviews">
                  <StayReviewsStat reviews={reviews} />
                  <span className="space-dot">·</span>
                  <p>Superhost</p>
                </div>
              </div>
            </div>
            <hr className="custom-hr" />
            <div className="order-details-price-summary">
              <h1>Price details</h1>
              <div className="per-night-price-wrapper">
                <div className="per-night-price">
                ${stay.price.toLocaleString()} x {order.totalDays} nights
                </div>
                <div className="sub-total-price">
                  <h3>${order.nightsPrice}</h3>
                </div>
              </div>

              <div className="service-fee-wrapper">
                <div className="service-fee">
                  <h3>Airist service fee</h3>
                </div>
                <div className="fee-price">
                  <h3>${order.serviceFee}</h3>
                </div>
              </div>
              <div className="service-fee-wrapper cleaning-fee-wrapper">
                <div className="service-fee cleaning-fee">
                  <h3>Airist cleaning fee</h3>
                </div>
                <div className="fee-price">
                  <h3>${order.cleaningFee}</h3>
                </div>
              </div>

            </div>
            <hr className="custom-hr" />
            <div className="total-price">
              <div className="total-price-wrapper">
                <h3>Total (USD)</h3>
                <h3>${order.totalPrice}</h3>

              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
