import React, { Component } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import emailjs from "emailjs-com"

export default class ContactPage extends Component {
  constructor(props) {
    super(props)

    this.setState({
      user_first_name: "",
      user_last_name: "",
      user_email: "",
      user_subject: "",
      user_message: "",
      displayErrors: false,
      statusVisible: false,
      statusMessage: ""
    })

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log(event.target.checkValidity())
    if (!event.target.checkValidity()) {
      this.setState({ displayErrors: true, statusVisible: true, statusMessage: "Please fill the Form data" })

      return
    }
    this.setState({ displayErrors: false, statusVisible: true, statusMessage: "Success" })
    console.log(this.state)
    // emailjs.sendForm("service_hl7sooj", "service_hl7sooj", event.target);
  }

  render() {
    return (
      <Layout>
        <Seo title="Contact" />
        <div className="page-contact__grid">
          <div className="page-contact__grid--description">
            <h1>Contact</h1>
            <p>
              There are multiple ways of contact with me. You can use one of my
              social media accounts or you can simply send me an email. I am
              trying to respond within 24 hour time frame.
            </p>

            <div className="page-contact__form">
              <h3>Contact Form</h3>
              <form
                onSubmit={this.handleSubmit}
                noValidate
                className={this.state?.displayErrors ? "displayErrors" : ""}
              >
                <input
                  type="text"
                  name="user_first_name"
                  placeholder="First Name"
                  onChange={this.handleChange}
                  // onFocus={this.placeholder=""}
                  required
                />
                <input
                  type="text"
                  name="user_last_name"
                  placeholder="Last Name"
                  // onFocus="this.placeholder=''"
                  onChange={this.handleChange}
                  required
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="E-mail"
                  onChange={this.handleChange}
                  required
                />
                <textarea
                  type="text"
                  name="user_subject"
                  placeholder="Subject"
                  onChange={this.handleChange}
                  required
                />
                <textarea
                  type="text"
                  name="user_message"
                  placeholder="Message"
                  onChange={this.handleChange}
                  required
                />
                <button type="submit">Submit</button>
              </form>
              <div className="page-contact__form__status">
                <p
                  className={
                    this.state?.statusVisible ? "page-contact__form__status--active" : ""
                  }
                >
                  {this.state?.statusMessage}
                </p>
                {/* <p className={this.state?.status}>Status: Server Error</p>
                <p className={this.state?.status}>Status: Success</p> */}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
