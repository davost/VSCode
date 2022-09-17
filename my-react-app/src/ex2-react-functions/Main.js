import React from 'react';

function Header() {
    return (
        <div>
            <h1>Header Component</h1>
        </div>
    )
}

function Footer() {
    return(
        <div>
            <h1>Footer Component</h1>
        </div>
    );
}

function Content() {
    return(
        <div>
            <h1>Content Component</h1>
        </div>
    );
}

function Main() {
    return (
        <div>
            <Header />
            <Content />
            <Footer />

        </div>
    );
}

export default Main;