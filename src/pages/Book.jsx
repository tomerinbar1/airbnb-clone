
import { StayReviewsStat } from '../cmps/details/StayReviewsStat'
import goback from '../assets/img/common/goback.svg'

import { useLocation, useParams, useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { stayService } from "../services/stay.service"
import { orderService } from '../services/order.service'
import { utilService } from '../services/util.service'
import { LoginSignup } from '../cmps/user/LoginSignup'
import { userService } from '../services/user.service'
import { setFooterToDisplay } from '../store/stay.actions.js'

export const Book = () => {
  const [stay, setStay] = useState(null)
  // const { stayId } = useParams()

  const { stayId } = useParams()
  const [order, setOrder] = useState(null)
  const [isBooked, setIsBooked] = useState(false)
  const [localUser, setLocalUser] = useState(null)
  const [orderToSave, setOrderToSave] = useState(null)

  const location = useLocation()
  const navigate = useNavigate()
  const user = useSelector((state) => state.userModule.user)

  const searchParams = new URLSearchParams(location.search)
  const { checkIn, checkOut, guests, stayName } = Object.fromEntries(searchParams.entries())
  const cleaningFee = 6
  const serviceFee = 15


  useEffect(() => {
    async function loadData() {
      const userFromDb = await loadUser()
      loadOrderDetails()
    }
    loadData()
  }, [user])


  useEffect(() => {
    getStay()
    setFooterToDisplay(false)

  }, [])

  useEffect(() => {
    if (!orderToSave) return
    updateUserDb()
  }, [orderToSave])

  async function onConfirmBtn() {
    try {
      await saveOrder()
      setIsBooked(true)
    } catch (err) {
      console.log('Had issues in booking', err);
    }
  }


  async function saveOrder() {
    try {
      const addedOrder = await orderService.save(order)
      setOrderToSave(addedOrder)
      console.log(addedOrder)
    } catch (err) {
      console.log('Had issues in booking', err)
    }
  }


  async function updateUserDb() {

    try {
      const updatedUser = { ...localUser, orders: [...localUser.orders, orderToSave] }
      setLocalUser(updatedUser)
      const savedUser = await userService.update(updatedUser)
      console.log('savedUser', savedUser)
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
    orderToSet.createdAt = +new Date()
    return orderToSet
  }

  function onMyTripsBtn() {
    navigate(`/trip`)
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
        <button><img src={goback} alt="" /></button>
        <span className='confirm-header'>Confirm and pay</span>
      </div>

      <section className='book-page-container'>
        <main className="book-page-main">



          <section className='good-price-section'>
            <span className='good-price-header'>  Good price.</span>
            <span className='good-price-contant'>  Your dates are $35 less than the avg. nightly rate over the last 3 months.</span>
            <span className='price-tag-icon'></span>

          </section>
          <section className="book-details-wrapper">
            <div className="book-details">
              <h2>Your trip</h2>
              <div className="book-details-trip-info">
                <div className="book-details-trip-date">
                  <div className="date-info">
                    <h3>Dates</h3>
                    <p>
                      {utilService.formattedDate(order.startDate)} -{' '}
                      {utilService.formattedDate(order.endDate)}
                    </p>
                  </div>
                  <div className="book-details-edit">
                    <a href="#">Edit</a>
                  </div>
                </div>
                <div className="book-details-trip-guests">
                  <div className="guest-info">
                    <h3>Guests</h3>
                    <span className='guest-count'>
                      {getGuestsCount()}
                    </span>
                    <span>guests</span>
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
        </main>

        <section className="book-summary-details">
          <div className="order-details">
            <div className="order-details-header">
              <img src={imgUrls[1]} alt="" />
              <div className="book-stay-basic-wrapper">
                <div className="order-details-header-text">
                  <div className="book-stay-basic">
                    <span className='stay-type'>{type}</span>
                    <span className='stay-name'>{name}</span>
                  </div>
                </div>
                <div className="book-stay-reviews">
                  <StayReviewsStat reviews={reviews} />
                </div>
              </div>
            </div>
            {/* <hr className="custom-hr" /> */}
            <div className="order-details-price-summary">
              <span className='price-details-header'>Price details</span>
              <div className="per-night-price-wrapper">
                <div className="per-night-price">
                  ${stay.price.toLocaleString()} x {order.totalDays} nights
                </div>
                <div className="sub-total-price">
                  <span>${order.nightsPrice}</span>
                </div>
              </div>

              <div className="service-fee-wrapper">
                <div className="service-fee">
                  <span>Airist service fee</span>
                </div>
                <div className="fee-price">
                  <span>${order.serviceFee}</span>
                </div>
              </div>
              <div className="service-fee-wrapper cleaning-fee-wrapper">
                <div className="service-fee cleaning-fee">
                  <span>Airist cleaning fee</span>
                </div>

                <div className="fee-price">
                  <span>${order.cleaningFee}</span>
                </div>
              </div>

              <div className="taxes-wrapper">
                <div className="taxes">
                  <span>Taxes</span>
                </div>
                <div className="fee-price">
                  <span>${order.cleaningFee}</span>
                </div>
              </div>

            </div>
            {/* <hr className="custom-hr" /> */}
            <div className="total-price">
              <div className="total-price-wrapper">
                <span>Total <span className='currency'>(USD)</span></span>
                <span>${order.totalPrice}</span>

              </div>
            </div>
          </div>
        </section>
      </section>


    </div>
  )
}
