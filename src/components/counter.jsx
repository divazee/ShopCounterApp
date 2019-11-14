import React, { Component } from 'react'

class Counter extends Component {
    state = { 
        value: this.props.counter.value
    }

    
    handleIncrement = () => {
        console.log("clicked!")
        return this.setState({ value: this.state.value + 1 })
    }
    
    render() { 
        return ( 
            <div>              
                {/* <h3>{this.props.children}</h3> */}
                <span className={ this.getBadgeClasses() }>
                    { this.formatCount() }
                </span>

                <button 
                    className="btn btn-info m-2"
                    onClick={ this.handleIncrement }
                >
                    Increment
                </button>

                <button 
                    className="btn btn-danger m-2"
                    onClick={ this.props.onDelete }
                    // onClick={ () => this.props.onDelete(this.props.counter.id) }
                >
                    Delete
                </button>
            </div>
         );
    }


    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        return this.state.value === 0 ? "Zero" : this.state.value
    }
}
 
export default Counter;