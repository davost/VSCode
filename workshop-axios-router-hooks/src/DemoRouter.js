import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Header from './Header';
import CrudDemo from './CrudDemo';

const DemoRouter = () => {
    return (
        <div className='container'>
            <Router>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Welcome} />
                    <Route path="/home" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/person" component={Person} />
                    <Route path="/crud" component={CrudDemo} />
                    {/* <Route path="/details/:id" component={PersonDetails} /> */}
                </Switch>
            </Router>
        </div>
    )
}

export const Home = () => {
    return (
        <div className='container'>
            <p>Home</p>
        </div>
    );
}

const Welcome = () => {
    return (
        <div>Welcome</div>
    );
}

export const About = () => {
    return (
        <div>About</div>
    );
}

export const Person = () => {
    return (
        <div>
            Person
            <Redirect to={"/crud"} />
        </div>
        
    );
}


export const NotFound = () => {
    return (
        <div>NotFound</div>
    );
}

export default DemoRouter;