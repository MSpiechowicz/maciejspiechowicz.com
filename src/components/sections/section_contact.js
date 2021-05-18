import React, { Component } from "react"
import emailjs from "emailjs-com"
import success from "../../images/icons/success.png"
import error from "../../images/icons/error.png"

export default class ContactSection extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.setState({
      user_first_name: "",
      user_last_name: "",
      user_email: "",
      user_subject: "",
      user_message: "",
      displayErrors: false,
      statusVisible: false,
      statusMessage: "",
      image: "",
      disabled: false,
    })
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit(event) {
    event.preventDefault()

    if (!event.target.checkValidity()) {
      this.setState({
        displayErrors: true,
        statusVisible: true,
        statusMessage: "Please fill the Form data",
        image: error,
        disabled: false,
      })
      return
    }

    this.setState({
      displayErrors: false,
      statusVisible: true,
      statusMessage: "Message was sent",
      image: success,
      disabled: true,
    })

    emailjs
      .sendForm(
        "service_hl7sooj",
        "template_v1qazkg",
        event.target,
        "user_7NMefnaROmBVDXSe3INct"
      )
      .then(result => console.log(`Message sent successfully with ${result}`))
      .catch(error => console.log(`Message sent error with ${error}`))
  }

  render() {
    return (
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
                required
              />
              <input
                type="text"
                name="user_last_name"
                placeholder="Last Name"
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
              <button type="submit" disabled={this.state?.disabled}>
                Submit
              </button>
              <div className="page-contact__form__status">
                <div
                  className={
                    this.state?.image
                      ? "page-contact__form__status__image--active"
                      : "page-contact__form__status__image"
                  }
                >
                  <img id="A" alt="ADS" src={this.state?.image}></img>
                </div>
                <span
                  className={
                    this.state?.statusVisible
                      ? "page-contact__form__status_message--active"
                      : "page-contact__form__status_message"
                  }
                >
                  {this.state?.statusMessage}
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

  // return (
  //   <Layout>
  //     <Seo title="Contact" />
  //   </Layout>
  // )
