import { Component } from 'react';

// Define a type for the state
interface CounterState {
    count: number;
}

// Props type can be empty if no props are passed
interface CounterProps { }

class Counter extends Component<CounterProps, CounterState> {
    state: CounterState = {
        count: 0
    };

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}

export default Counter;
