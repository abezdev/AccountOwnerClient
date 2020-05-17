class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };

    }
    increment(){
        this.setState(state => ({
            count: state.count + 1
        }))
    }
    decrement(){
        this.setState(state => ({
            count: state.count - 1
        }))
    }
    reset(){
        this.setState(state => ({
            count: 0
        }))
    }
    render() {
      return (
        <div>
          <button className='inc' onClick={this.increment.bind(this)}>Increment!</button>
          <button className='dec' onClick={this.decrement.bind(this)}>Decrement!</button>
          <button className='reset' onClick={this.reset.bind(this)}>Reset</button>
          <h1>Current Count: {this.state.count}</h1>
        </div>
      );
    }
  };
  