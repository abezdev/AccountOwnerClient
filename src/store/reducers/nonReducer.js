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