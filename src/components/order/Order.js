import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
import './order.css'

const Order = () => {
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const [data, setData] = useState({
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  })

  const [address, setAddress] = useState('')
  const [postalcode, setPostalcode] = useState('')

  let navigate = useNavigate()

  const handleInputFocus = (e) => {
    setData({ ...data, focus: e.target.name })
  }

  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  }

  const handleOrder = (e) => {
    e.preventDefault()
    if (
      !data.cvc ||
      !data.expiry ||
      !data.name.trim() ||
      !data.number ||
      !address.trim() ||
      !postalcode
    ) {
      setError(true)
      return
    }
    setError(false)
    setSuccess(true)
    setTimeout(() => {
      navigate('/')
    }, 1300)
  }

  return (
    <div className="order-wrapper">
      <div id="PaymentForm">
        <Card
          cvc={data.cvc}
          expiry={data.expiry}
          focused={data.focus}
          name={data.name}
          number={data.number}
        />
        <form className="order-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <input
            type="number"
            name="number"
            placeholder="Card Number"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            min="0"
          />
          <input
            type="number"
            name="expiry"
            placeholder="Expire Date"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            min="0"
          />
          <input
            type="number"
            name="cvc"
            placeholder="CVC"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            min="0"
          />
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            type="number"
            placeholder="Postcode"
            min="0"
            value={postalcode}
            onChange={(e) => setPostalcode(e.target.value)}
          />
          {error && <p className="order-error">Fill all the fields</p>}
          <button className="order-btn" onClick={handleOrder}>
            ORDER
          </button>
        </form>
      </div>
      {success && (
        <div class="success-wrapper">
          <h2 className="success-title">Successful order</h2>
          <div>
            <svg
              class="checkmark"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 52 52"
            >
              <circle
                class="checkmark__circle"
                cx="26"
                cy="26"
                r="25"
                fill="none"
              />
              <path
                class="checkmark__check"
                fill="none"
                d="M14.1 27.2l7.1 7.2 16.7-16.8"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  )
}

export default Order
