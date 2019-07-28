import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Counter from './counter';

class Counters extends Component {
    state = {
        counters: [
            {id: 1, value: 4},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0},
        ]
    };

    handleDelete = counterId => {
        console.log('Event Handler Called', counterId);
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters });
    };

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });

        this.setState({
            counters: counters
        });
    };

    // handleIncrement = counterId => {
    //     const counters = this.state.counters.map(c => {
    //         if (c.id === counterId)
    //             c.value = c.value + 1;
    //
    //         return c;
    //     });
    //
    //     this.setState({ counters });
    // };
    handleIncrement = counter => {
        // console.log(counter);
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        // counters[index] = {...counter};     // I don't think you need to do this step, i have remove it and it still works.....
        counters[index].value++;
        console.log(this.state.counters[index]);
        this.setState({ counters });
    };

    // <Counter key={counter.id} value={counter.value} selected={true}/>)}

    // render() {
    //     return (
    //         <div>
    //             {this.state.counters.map(counter =>
    //                 <Counter key={counter.id} onDelete={this.handleDelete} value={counter.value} id={counter.id} >
    //                     <h4>Counter #{counter.id}</h4>
    //                 </Counter>
    //             )}
    //         </div>
    //     );
    // }

    // render() {
    //     return (
    //         <div>
    //             <button onClick={this.handleReset} className="btn btn-primary btn-sm m-2">Reset</button>
    //             {this.state.counters.map(counter =>
    //                 <Counter key={counter.id} onDelete={this.handleDelete} counter={counter} >
    //                     <h4>Counter #{counter.id}</h4>
    //                 </Counter>
    //             )}
    //         </div>
    //     );
    // }
    render() {
        return (
            <div>
                <button onClick={this.handleReset} className="btn btn-primary btn-sm m-2">Reset</button>
                {this.state.counters.map(counter =>
                    <Counter key={counter.id} onIncrement={this.handleIncrement} onDelete={this.handleDelete} counter={counter} >
                        <h4>Counter #{counter.id}</h4>
                    </Counter>
                )}
            </div>
        );
    }
}

Counters.propTypes = {};

export default Counters;