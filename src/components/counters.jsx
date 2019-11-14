import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {
        counters: [
            {id: 1, value: 4},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0}
        ]
    }

    handleDelete = (counterID) => {
        console.log("deleted!", counterID)
        const newCounters = this.state.counters.filter(c => c.id !== counterID)
        this.setState({ counters: newCounters })
    }

    handleReset = () => {
        
    }

    render() { 
        return ( 
            <div>
                {/* <Counter /> */}
                <button 
                    className="btn btn-secondary m-2"
                    onClick={ this.handleReset }
                >
                    Reset
                </button>

                {this.state.counters.map(counter => 
                    <Counter 
                        key={counter.id} 
                        counter={ counter }
                        // onDelete={ () => this.handleDelete(counter.id)}
                        onDelete={ () => this.handleDelete( counter.id ) }
                    />
                )}
            </div>
         );
    }
}
 
export default Counters;