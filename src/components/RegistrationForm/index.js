import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstNameError: '',
    lastNameError: '',
    sun: false,
  }

  onFirst = event => {
    this.setState({
      firstName: event.target.value,
    })
  }

  onLast = event => {
    this.setState({
      lastName: event.target.value,
    })
  }

  onFirstError = () => {
    const {firstName} = this.state
    const isValidFirst = firstName === ''
    this.setState({
      firstNameError: isValidFirst,
    })
  }

  onLastError = () => {
    const {lastName} = this.state
    const isValidLast = lastName === ''
    this.setState({
      lastNameError: isValidLast,
    })
  }

  onCount = () => {
    this.setState({
      sun: true,
    })
  }

  onSubmitForm = event => {
    event.preventDefault()
    this.onFirstError()
    this.onLastError()
  }

  render() {
    const {firstName, lastName, firstNameError, lastNameError, sun} = this.state
    console.log(this.state)
    let Hello = true
    if (firstNameError === false && lastNameError === false) {
      Hello = false
    }
    if (sun === true) {
      Hello = true
    }
    return (
      <div className="container">
        <div className="card">
          {Hello && (
            <>
              <form onSubmit={this.onSubmitForm}>
                <h1 className="head">Registration Form</h1>
                <div className="cont">
                  <label className="label-class" htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    type="text"
                    onBlur={this.onFirstError}
                    className="text-box"
                    id="firstName"
                    placeholder="First Name"
                    value={firstName}
                    onChange={this.onFirst}
                  />
                  {firstNameError && <p className="error">Required</p>}
                </div>
                <div className="cont">
                  <label className="label-class" htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    type="text"
                    onBlur={this.onLastError}
                    className="text-box"
                    id="lastName"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={this.onLast}
                  />
                  {lastNameError && <p className="error">Required</p>}
                </div>
                <button className="button" type="submit">
                  Submit
                </button>
              </form>
            </>
          )}
          {!Hello && (
            <div>
              <p>Submitted Successfully </p>
              <img
                src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                alt="success"
              />
              <button className="button" type="button" onClick={this.onCount}>
                Submit Another Response
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
