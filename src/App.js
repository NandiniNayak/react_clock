import React, { Component } from 'react';
import Clock from "./Clock";


const App = (prop) => {
    return (
        <div>
            <Clock
                icon="sun.svg"
                timezone={"Sydney/Australia"}
                date={new Date()}
            />
        </div>
    )
}
export default App;
