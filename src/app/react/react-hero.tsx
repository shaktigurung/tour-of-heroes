import React from 'react';
import Greetings from './greetings';

class ReactHero extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }

    onHandleChange = event => {
        this.setState({
            name: event.target.value
        });
    }

    onHandleSubmit = event => {
        event.preventDefault();
        console.log(`Name is submitted ${this.state.name}`);
    }

    render() {
        const {name} = this.state;
        return (
            <span>
                <span> React Hero Component </span><br/>
                <form onSubmit={this.onHandleSubmit}>
                    <label>
                        Name:
                        <input type='text' value={this.state.name} onChange={this.onHandleChange} />
                    </label>
                    <input type='submit' value='Submit' />
                </form>
                <Greetings name={name} />
            </span>
        );
    }
}
export default ReactHero;