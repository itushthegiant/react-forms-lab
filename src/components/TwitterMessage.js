import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleMessage = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

 



  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
        onChange={event => this.handleMessage(event)}
        type="text" 
        name="message" 
        id="message" 
        value={this.state.message}
        />
        <p>
          {this.props.maxChars - this.state.message.length}
        </p>
      </div>
    );
  }
}

export default TwitterMessage;
