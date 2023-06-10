import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DatePicker } from './DatePicker';
import { useState, useEffect } from 'react'

import { useLocation, useSearchParams, useNavigate } from 'react-router-dom'
import { utilService } from '../../../services/util.service';
import { GuestOrderSelect } from './GuestOrderSelect';
import { DateSelect } from '../../DateSelect';



export function StayDetailsOrder({ stay, setOpenTab, openTab }) {
    const location = useLocation()
    // const [toValue, setToValue] = useState('')
    // const [fromValue, setFromValue] = useState('')
    // const [selected, setSelected] = useState([])

    let [searchParams, setSearchParams] = useSearchParams(new URLSearchParams(location.search))
    const cleaningFee = 6
    const serviceFee = 15
    const [updatedsearchParams, setUpdatedsearchParams] = useState(
        {
            checkIn: '',
            checkOut: '',
            guests: {
                adults: 1,
                children: 0,
                infants: 0,
                pets: 0,
            },
        }
    )


    const navigate = useNavigate()
    const params = Object.fromEntries(searchParams.entries())
    const guestsFromParams = (params.guests) ? JSON.parse(params.guests) : 1
    // console.log('params ', params)
    console.log('updatedsearchParams ', updatedsearchParams)


    useEffect(() => {
        setUpdatedsearchParams(orderParams)
    }, [])


    const orderParams = {
        checkIn: params.checkIn
            ? (+params.checkIn)
            : '',
        checkOut: params.checkOut
            ? (+params.checkOut)
            : '',
        guests: {
            adults: +guestsFromParams.adults || 1,
            children: +guestsFromParams.children || 0,
            infants: +guestsFromParams.infants || 0,
            pets: +guestsFromParams.pets || 0,
        }
    }


   

    function getGuestsCount() {
        const guestsCount = Object.values(updatedsearchParams.guests)
            .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        // console.log('guestsCount' , guestsCount)
        return guestsCount
    }

    function setCheckInOutButtons(type) {
        const buttonText = (updatedsearchParams[type])
            ? (new Date(updatedsearchParams[type])).toLocaleDateString() : 'Add date'
        return buttonText
    }

    function onReserveBtn() {
        const paramsForBookingGuests = JSON.stringify(updatedsearchParams.guests)
        navigate(`/book/${stay._id}?checkIn=${updatedsearchParams.checkIn}&checkOut=${updatedsearchParams.checkOut}&guests=${paramsForBookingGuests || 1}&stayName=${stay.name}`)

    }

    function onChangeDates(value){
        const updatedCheckIn = new Date(value.checkIn).getTime()
        const updatedCheckOut = new Date(value.checkOut).getTime()
        setUpdatedsearchParams(prevParams => ({ ...prevParams, checkIn: updatedCheckIn, checkOut:updatedCheckOut }))

        // setFilterBy({ ...filterBy, checkIn: fromValueTimeStmp, checkOut: toValueTimeStmp })


        // onChangeDates({ checkIn: range.from, checkOut: range.to })

    }

    function onSetField(field, value) {
        if (field === 'guests') {
            // console.log(value)
            searchParams.set('adults', value.adults)
            searchParams.set('children', value.children)
            searchParams.set('infants', value.infants)
            searchParams.set('pets', value.pets)
        }
        if (field === 'checkIn' || field === 'checkOut') {
            if (value) {
                value = value.getTime()
            }
            // orderParams[field] = value
        }

        setSearchParams(searchParams)
        setUpdatedsearchParams(prevParams => ({ ...prevParams, [field]: value }))
    }



    return (
        <section className='order-modal'>
            <section className='user-prefs'>
                <section className='order-modal-header'>
                    <section className='price-per-night'>
                        <span className='price'>${stay.price}</span>
                        <span className='word-night'>night</span>
                    </section>
                    {/* <span>rate</span> */}
                    {/* <span>1 review</span> */}

                </section>

                {/*///// DATE PICKER //////*/}

                <section className='picker-container'>
                    {(openTab === 'checkIn' || openTab === 'checkOut') && (           //calander open
                        <section className='date-picker-container'>
                            <section className='date-picker-header'>
                            {(updatedsearchParams.checkIn && updatedsearchParams.checkOut) ? (<h4>{utilService.totalDays(updatedsearchParams.checkIn, updatedsearchParams.checkOut)} nights</h4>) : <h4>Select dates</h4>}
                            {(updatedsearchParams.checkIn && updatedsearchParams.checkOut) ? (<h5>{utilService.ShortFormattedDate(updatedsearchParams.checkIn)}-{utilService.ShortFormattedDate(updatedsearchParams.checkOut)}</h5>) : <h5>Add your travel dates for exact pricing</h5>}
                            </section>
                            <DatePicker
                            setUpdatedsearchParams={setUpdatedsearchParams}
                                checkIn={updatedsearchParams.checkIn}
                                checkOut={updatedsearchParams.checkOut}
                            />

                            <section className='open-picker-btns'>
                                {/* <button className='clear-open-picker-btn' onClick={() => { onSetField('checkIn', ''); onSetField('checkOut', '') }}>Clear dates</button> */}
                                <button className='close-open-picker-btn' onClick={() => setOpenTab('')}>Close</button>
                          
                            </section>
                        </section>

                    )}
                    <section className={(openTab === 'checkIn' || openTab === 'checkOut') ? 'picker-btns active' : 'picker-btns'}   >
                        <button
                            onClick={() => setOpenTab('checkIn')}
                            className='clean-button check-in picker'>
                            <div className='order-heading'>CHECK-IN</div>
                            <span>{setCheckInOutButtons('checkIn')}</span>
                        </button>

                        <button
                            onClick={() => setOpenTab('checkOut')}
                            className='clean-button check-out picker'>
                            <div className='order-heading'>CHECK-OUT</div>
                            <span>{setCheckInOutButtons('checkOut')}</span>

                        </button>
                    </section>
                </section>

                {/*///// GUESTS//////*/}

                <section className='guests'>
                    <section className='guests-close'>
                        <button onClick={() => (openTab === 'guests' ? setOpenTab(null) : setOpenTab('guests'))} className="guests-btn">GUESTS
                            {getGuestsCount()}
                        </button>
                        {openTab === 'guests' && (
                            <section className="guests-open">
                                <GuestOrderSelect
                                    guests={updatedsearchParams.guests}
                                    onSetField={onSetField}
                                    setOpenTab={setOpenTab}
                                />
                            </section>
                        )}
                    </section>
                </section>
            </section>

            {(!updatedsearchParams.checkIn || !updatedsearchParams.checkOut) && (
                <button className="check-availability" onClick={() => setOpenTab('checkIn')}>
                    Check availability</button>)}

            {(updatedsearchParams.checkIn && updatedsearchParams.checkOut) &&
                <section className="reservation-details">

                    <button className='reserve-btn' onClick={onReserveBtn}>Reserve</button>

                    <section className='no-charge-msg'>
                        You won't be charged yet
                    </section>
                    {/* <section className='price-summary'>
                        <p> $ * nights</p>
                        <p>Cleaning fee <span>{getTotalCleaningFee()}</span></p>
                        <p>Airbnb service fee</p>
                        <p>Total</p>
                    </section> */}
                </section>
            }
        </section>


    )
}