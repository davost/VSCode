// shortcut for creating a class is "rcc"
import React, { Component } from "react";
import HeaderClassComponent from "./HeaderClassComponent";
import FirstClassComponent from "./FirstClassComponent";
import FooterClassComponent from "./FooterClassComponent";

class App extends Component {

    render() {
        return (
            <div>
               <HeaderClassComponent />
               <FirstClassComponent />
               <FooterClassComponent />
            </div>
        )
    }
}

export default App;