import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
    // Wrong implementation. This make the Counter.state.value separated from the Counters.
    // Whenever the parent reset the value, it cannot passed into here. because it's only passed once during the initialization.
    // state = {
    //     value: this.props.counter.value,
    // };

    // state = {
    //     value: this.props.value,
    // };

    // state = {
    //     count: 0,
    //     tags: ['tag1', 'tag2', 'tag3']
    // };

    // state = {
    //     count: 1,
    //     imageURL: 'https://picsum.photos/200'
    // };
    // <img src={this.state.imageURL} alt=""/>

    // styles = {
    //     fontSize: 50,
    //     fontWeight: "bold"
    // };
    // <span style={this.styles} className="badge badge-primary m-2">{this.formatCount()}</span>

    // <span style={{fontSize: 30}} className="badge badge-primary m-2">{this.formatCount()}</span>

    // To keep the key unique, do
    // {this.state.tags.map(tag => <li key={tag}>{tag}</li>)} , or
    // {this.state.tags.map(tag => <li key={tag.id}>{tag}</li>)}
    // {this.state.tags.map((tag, index) => <li key={index}>{tag}</li>)}

    // // Don't use Tags for now.
    // renderTags() {
    //     // if (this.state.tags.length === 0) return 'There are no tags!';
    //     if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    //
    //     return <ul>{this.state.tags.map((tag, index) => <li key={index}>{tag}</li>)}</ul>
    // }

    // Get handleIncrement to has access to this method:
    // Method 1: use constructor, and then use handleIncrement(){...}
    // constructor() {
    //     super();
    //     console.log('Constructor', this);
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }
    // handleIncrement() {
    //     console.log("Increment Clicked", this.state.count);
    //     // obj.method() >> this refers to obj.
    //     // function() >> this refers to window object. But if 'use strict' mode is use >> it become undefined.
    // }

    // ######################################################################################
    // Method 2: use handleIncrement = () => {...}
    // Arrow function don't remind that 'this' keyword, they inherited.

    // handleIncrement = product => {
    //     console.log("Increment Clicked", this.state.count);
    //     console.log(product);
    //     this.setState({
    //         count: this.state.count + 1
    //     })
    // };

    // handleIncrement = product => {
    //     console.log("Increment Clicked", this.state.value);
    //     console.log(product);
    //     this.setState({
    //         value: this.state.value + 1
    //     })
    // };

    // Comment this out to handle the increment in parents so the single source of true is in parents
    // So the Reset and increment can only make change (setState) on the same single source of true properties.
    // handleIncrement = () => {
    //     console.log("Increment Clicked", this.state.value);
    //     this.setState({
    //         value: this.state.value + 1
    //     })
    // };

    // The component that owns a piece of the state, should be the one modifying it.
    // So delete a counter should be handled by the Counters component because it owns all the <Counter>

    // render() {
    //     return (
    //         <React.Fragment>
    //             <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
    //             <button className="btn btn-secondary btn-sm">Increment</button>
    //             <ul>
    //                 {this.state.tags.map((tag, index) => <li key={index}>{tag}</li>)}
    //             </ul>
    //         </React.Fragment>
    //     );
    // }

    // render() {
    //     return (
    //         <React.Fragment>
    //             <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
    //             <button onClick={() => this.handleIncrement({ id: 1 })} className="btn btn-secondary btn-sm">Increment</button>
    //             {this.state.tags.length === 0 && 'Please create a new tag'}
    //             {this.renderTags()}
    //         </React.Fragment>
    //     );
    // }

    render() {
        // console.log('props', this.props);
        return (
            <div>
                {this.props.children}
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
                {/*<button onClick={() => this.props.onIncrement(this.props.counter.id)} className="btn btn-secondary btn-sm">Increment</button>*/}
                {/*<button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>*/}
                {/*<button onClick={() => this.handleIncrement({ id: 1 })} className="btn btn-secondary btn-sm">Increment</button>*/}

                {/*{this.state.tags.length === 0 && 'Please create a new tag'}*/}
                {/*{this.renderTags()}*/}

                {/*<button onClick={() => this.props.onDelete(this.props.id)} className="btn btn-danger btn-sm m-2">Delete</button>*/}
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        // classes += (this.state.count === 0) ? 'warning' : 'primary';
        // classes += (this.state.value === 0) ? 'warning' : 'primary';
        classes += (this.props.counter.value === 0) ? 'warning' : 'primary';
        return classes;
    }

    formatCount() {
        // const {count} = this.state;
        // return count === 0 ? "Zero" : count;
        // const {value} = this.state;
        const {value} = this.props.counter;
        return value === 0 ? "Zero" : value;
    }
}

Counter.propTypes = {};

export default Counter;