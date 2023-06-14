import React, { useState } from 'react'

export function Payments({ order, setIsPayments, getPaymentsValue, getSecondPaymenDate }) {
    const [selectedOption, setSelectedOption] = useState('')
    const [isFullClicked, setIsFullClicked] = useState(false)
    const [isPartClicked, setIsPartClicked] = useState(false)

    const handleOptionChange = (event) => {
        // console.log(event.target.value)
        setSelectedOption(event.target.value)
        if (event.target.value === 'full') {
            setIsFullClicked(true)
            setIsPartClicked(false)
            setIsPayments(false)

        }
        if (event.target.value === 'payments') {
            setIsFullClicked(false)
            setIsPartClicked(true)
            setIsPayments(true)

        }
    }

 

    const dynClassFull = isFullClicked ? 'fa-solid fa-circle-dot active' : 'button-input'
    const dynClassPart = isPartClicked ? 'fa-solid fa-circle-dot active' : 'button-input'
    // const dynClassLabel = isClicked ?  'fa-solid fa-circle-dot active' : 'input'

    return (

        <div className="book-payments-form">
            <div className='choose-payment-header'>Choose how to pay</div>
            <div className='payments-container'>
                <label className='pay-full'>
                    <div>
                        <section className='payments-header'> Pay in full </section>
                        <section className='payments-content'>Pay the total( ${order.totalPrice}) now and you're all set.</section>
                    </div>
                    <input 
                        style={{ color: "none" }}
                         className={dynClassFull}
                        type="radio"
                        value="full"
                        checked={selectedOption === 'full'}
                        onChange={handleOptionChange}
                    />
                </label>

                <label className='payments'>
                    <div >
                        <section className='payments-header'>Pay part now, part later</section>
                        <section className='payments-content'>
                            ${getPaymentsValue()} due today, ${getPaymentsValue()} on {getSecondPaymenDate()}. No extra fees.</section>
                    </div>
                    <input
                        className={dynClassPart}
                        type="radio"
                        value="payments"
                        checked={selectedOption === 'payments'}
                        onChange={handleOptionChange}
                    />
                </label>
            </div>

        </div>
    )
}

