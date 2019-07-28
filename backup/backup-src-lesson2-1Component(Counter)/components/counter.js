import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    };

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

    renderTags() {
        // if (this.state.tags.length === 0) return 'There are no tags!';
        if (this.state.tags.length === 0) return <p>There are no tags!</p>;

        return <ul>{this.state.tags.map((tag, index) => <li key={index}>{tag}</li>)}</ul>
    }

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

    // Method 2: use handleIncrement = () => {...}
    // Arrow function don't remind that 'this' keyword, they inherited.
    handleIncrement = product => {
        console.log("Increment Clicked", this.state.count);
        console.log(product);
        this.setState({
            count: this.state.count + 1
        })
    };

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
    render() {
        return (
            <React.Fragment>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.handleIncrement({ id: 1 })} className="btn btn-secondary btn-sm">Increment</button>
                {this.state.tags.length === 0 && 'Please create a new tag'}
                {this.renderTags()}
            </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? 'warning' : 'primary';
        return classes;
    }

    formatCount() {
        const {count} = this.state;
        return count === 0 ? "Zero" : count;
    }
}

Counter.propTypes = {};

export default Counter;