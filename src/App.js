import React, { Component } from 'react';
import NavBar from './components/navbar';
import './App.css';
import Counters from "./components/counters";

class App extends Component {
    // You cannot in here, or in the constructor, setState({counters: []}).
    // Because setState only available after the component is rendered.
    // So initially you can only do state={...} or state=this.props.something.
    state = {
        counters: [
            {id: 1, value: 4},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0},
        ]
    };

    constructor(props) {
        super(props);
        console.log('App - Constructed')
        // this.state = this.props.something;
    }

    componentDidMount() {
        console.log('App - Mounted')
        // // Ajax Call
        // this.setState({movies})
    }

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

        // You have to do override on the counters[index], even though it looks everything works find in the surface.
        // Because if you don't override it, in the componentDidUpdate(prevProps, prevState) {..} method,
        // prevProps does not keep the previous value E.g. it will have the value of 5 instead of the default value 4.
        counters[index] = {...counter};

        counters[index].value++;
        // console.log(this.state.counters[index]);
        this.setState({ counters });
    };

    render() {
        console.log('App - Rendered');
        return (
            <React.Fragment>
                <NavBar totalCounters={this.state.counters.filter(c => c.value > 0 ).length}/>
                <main className="container">
                    <Counters
                        counters={this.state.counters}
                        onReset={this.handleReset}
                        onIncrement={this.handleIncrement}
                        onDelete={this.handleDelete}
                    />
                </main>
            </React.Fragment>
        );
    }
}

export default App;
