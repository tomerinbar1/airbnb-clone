import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DatePicker } from './DatePicker';
import { useState, useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'

import { useLocation, useParams } from 'react-router-dom'
import { loadStays } from '../../../store/stay.actions';



export function StayDetailsOrder({ stay, setOpenTab, openTab }) {
    // const { stayId } = useParams()
    // const [stay, setStay] = useState(null)
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const params = Object.fromEntries(searchParams.entries())
    // const { txt, location: locationFromParams } = Object.fromEntries(searchParams.entries())
    console.log('params ', params);
    console.log('stay from order', stay)



    const orderParams = {
        checkIn: params.checkIn
            ? new Date(+params.checkIn)
            : '',
        checkOut: params.checkOut
            ? new Date(+params.checkOut)
            : '',
        guests: {
            adults: +searchParams.get('adults') || 1,
            children: +searchParams.get('children') || 0,
            infants: +searchParams.get('infants') || 0,
            pets: +searchParams.get('pets') || 0,
        },
    }







    function onSetField(field, value) {
        // console.log(searchParams)
        // if (field === 'guests') {
        //   searchParams.set('adults', value.adults)
        //   searchParams.set('children', value.children)
        //   searchParams.set('infants', value.infants)
        //   searchParams.set('pets', value.pets)
        // }
        if (field === 'checkIn' || field === 'checkOut') {
            if (value) {
                value = value.getTime()
            }
            searchParams.set(field, value)
        }
        // setSearchParams(searchParams)
    }

    return (
        <section className='order-modal'>
            <section className='user-prefs'>
                <section className='order-modal-header'>
                    {/* <span>{stay.price}</span> */}
                    <span>night</span>
                    <span>rate</span>
                    <span>1 review</span>
                </section>

                <section className='picker-container'>
                    {(openTab === 'checkIn' || openTab === 'checkOut') && (
                        <section className='date-picker-container'>

                            {/* {(orderParams.checkIn && orderParams.checkOut) ? (<h4>{utilService.totalDays(orderParams.checkIn, orderParams.checkOut)} nights</h4>) : <h4>Select Dates</h4>} */}

                            {/* {(orderParams.checkIn && orderParams.checkOut) ? ( <h5>{utilService.ShortFormattedDate(orderParams.checkIn)}-{utilService.ShortFormattedDate(orderParams.checkOut)}</h5>) : <h5>Minimum nights: 2 days</h5>} */}



                            <DatePicker
                                // checkIn={orderParams.checkIn}
                                // checkOut={orderParams.checkOut}
                                onSetField={onSetField}
                                className='date-picker'
                                style={{
                                    backgroundColor: 'black',
                                }}
                            />
                            <section className='open-picker-btns'>
                                <button className='clear-open-picker-btn' onClick={() => { onSetField('checkIn', ''); onSetField('checkOut', '') }}>Clear dates</button>
                                <button className='close-open-picker-btn' onClick={() => setOpenTab('')}>Close</button>
                            </section>
                        </section>

                    )}
                    <section className='picker-btns' >
                    <button
                        onClick={() => setOpenTab('checkIn')}
                        className='clean-button check-in picker'>
                        <div className='order-heading'>Check-In</div>
                        {/* <div className='order-sub-heading'>{checkInSubHeading}</div> */}
                    </button>

                    <button
                        onClick={() => setOpenTab('checkOut')}
                        className='clean-button check-out picker'>
                        <div className='order-heading'>Check-Out</div>
                        {/* <div className='order-sub-heading'>{checkOutSubHeading}</div> */}
                    </button>
                    </section>
                </section>

                <button className='reserve-btn'>Reserve</button>
            </section>

            <section className='chrage-msg'>
                You won't be charged yet
            </section>
            <section className='price-summary'>
                <p> $ * nights</p>
                <p>Cleaning fee</p>
                <p>Airbnb service fee</p>
                <p>Total</p>
            </section>

        </section>


    )
}