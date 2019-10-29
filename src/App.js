import React, {Component} from 'react';
import Clock from "./Clock";
import { METHODS } from 'http';
import { tsConstructorType } from '@babel/types';

// functional component only can have props (read only), 
// read and write  -  state : class components
// const App = (prop) => {
//     // make an api call -  use a web api to get the location
//     window.navigator.geolocation.getCurrentPosition(
//         position =>  console.log(position),
//         err => console.log(err)
//     )
//     return (
//         <div>
//             <p>{position}</p>
//             <Clock
//                 icon="sun.jpeg"
//                 timezone={"Sydney/Australia"}
//                 date={new Date()}
//             />
//         </div>
//     )
// }

// class Component
// 1. every class component must have a render method, which returns html
class App extends Component {
    // initialse state
    constructor(props) {
        super(props);
        this.state = {
            latitude: null
        }
        // make the api call in the tsConstructorType, in future we will be using life cycle methods
            window.navigator.geolocation.getCurrentPosition(
            position =>  this.setState({latitude: position.coords.latitude}),
            // never update state variable directly
            // position => this.state.latitude = position.coords.latitue,
            err => console.log(err)
        )
    }
    render() {
            return (
            <div>
                <p>{this.state.latitude}</p>
                <Clock
                    icon="sun.jpeg"
                    timezone={"Sydney/Australia"}
                    date={new Date()}
                />
            </div>
        )
    }
}

export default App;
