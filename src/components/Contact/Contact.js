import React, { Component } from 'react';

export default class Contact extends Component {
  constructor() {
    super();

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    }
    this.handleFirstName=this.handleFirstName.bind(this)
    this.handleLastName=this.handleLastName.bind(this)
    this.handleEmail=this.handleEmail.bind(this)
  }

  handleFirstName(val){
    this.setState({firstName: val})
  }

  handleLastName(val){
    this.setState({lastName: val})
  }

  handleEmail(val){
    this.setState({email: val})
  }

  handleMessageInput(val){
    this.setState({message: val})
  }

  render() {
    return (
      <div>
        <h1>I would love to hear from you!</h1>
        <div>
          <h2>Email Katherine at willowwatersillustration@gmail.com</h2>
        </div>
        <div className='form'>
          <form action="">
            First name: <br />
            <input onChange={e => this.handleFirstName(e.target.value)} value={this.state.input}type="text" name={this.state.firstName} />
            Last name: <br />
            <input onChange={e => this.handleLastName(e.target.value)} value={this.state.input}type="text" name={this.state.lastName} />
            Email: <br />
            <input onChange={e => this.handleEmail(e.target.value)} value={this.state.input}type="email" name={this.state.email} />
            <h4>
              What can I help you with?
              <input onChange={e => this.handleMessageInput(e.target.value)} value={this.state.input}type="text" name={this.state.message}/>
            </h4>
          </form>
        </div>
      </div>
    )
  }
}
