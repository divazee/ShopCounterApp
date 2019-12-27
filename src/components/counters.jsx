import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    render() {
        const { onReset, onIncrement, onDelete, counters } = this.props
        // console.log(this.props.counters)
        return (
            <div>
                {/* <Counter /> */}
                <button
                    className="btn btn-secondary m-2"
                    onClick={onReset}
                >
                    Reset
                </button>

                {counters.map(counter =>
                    <Counter
                        key={counter.id}
                        counter={counter}
                        onIncrement={onIncrement}
                        onDelete={onDelete}
                       // onDelete={ () => this.handleDelete(counter.id)}
                    >
                        Counter #{counter.id}
                    </Counter>
                )}
            </div>
        );
    }
}

export default Counters;