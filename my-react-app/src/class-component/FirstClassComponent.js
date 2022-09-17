import React, { Component } from "react";

class FirstClassComponent extends Component {
    render() {
        const displayDate = () => {
            alert(Date());
        }
        return(<div>
            <h1>Hello React FirstClass</h1>
            <button type="button" onClick={displayDate}>Click me.</button>
            </div>);
        
    }
}
export default FirstClassComponent;