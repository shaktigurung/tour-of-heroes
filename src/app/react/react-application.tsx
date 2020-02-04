import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Injector } from '@angular/core';
import ReactHero from './react-hero';

interface IReactApplication {
    injector: Injector;
  }

class ReactApp extends Component<IReactApplication, any> {
constructor(props) {
    super(props);
}

render() {
    return (
    <div className='renderer'>
        <h2 className='header'> ReactJS component </h2>
        <ReactHero name='John doe'/>
    </div>
    );
}
}

export class ReactApplication {

static initialize(
    containerId: string,
    injector: Injector
) {
    ReactDOM.render(
    <ReactApp injector={injector}/>,
    document.getElementById(containerId)
    );
}
}