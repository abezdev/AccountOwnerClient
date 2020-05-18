class DisplayMessages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            messages: []
        }
    }
    handleChange(e) {
        this.setState({
            input: e.target.value,
            messages: this.state.messages
        })
    }
    submitMessage() {
        this.setState({

            messages: [...this.state.messages, this.state.input],
            input: ''
        })
    }
    render() {
        return (
            <div>
                <h2>Type in a new Message:</h2>
                <input value={this.state.input} onChange={this.handleChange.bind(this)} />
                <button onClick={this.submitMessage.bind(this)}>asd</button>
                <ul>{this.state.messages.map(m => <li>{m}</li>)}</ul>{this.state.input}
            </div>
        );
    }
};
{/* <ul>{this.state.messages.map(x => <li>{x}</li>)}</ul>

    <ul>
        {this.state.messages.map((x, i) => {
            return <li key={i}>{x}</li>
        })}
    </ul> */}



// extract state logic to redux
// define ADD, addMessage(), messageReducer(), and store here:
const ADD = 'ADD';

const addMessage = message => {
  return {
    type: ADD,
    message
  };
};

const messageReducer = (previousState = [], action) => {
  switch (action.type) {
    case ADD:
      return [...previousState, action.message];
    default:
      return previousState;
  }
};

const store = Redux.createStore(messageReducer);






//
// Redux Code:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};



const store = Redux.createStore(messageReducer);

// React Code:

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    const currentMessage = this.state.input;
    this.setState({
      input: '',
      messages: this.state.messages.concat(currentMessage)
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};

const Provider = ReactRedux.Provider;

class AppWrapper extends React.Component {
  // render the Provider here

  // change code above this line
};




