import React from 'react';
import './App.css';
import Header from "./Header";

function App() {
    return (
        <div className="app-wrapper">
            <Header />
            <nav className="nav">
                <div>New Feeds</div>
                <div>More Pages</div>
                <div>Account</div>
            </nav>
            <div className="content">Main content</div>
        </div>
    );
}

export default App;
