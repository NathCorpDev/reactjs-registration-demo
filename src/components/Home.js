import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

//class Home extends Component {

function Home() {
    // constructor(props) {
    //     super(props)

    //     this.state = {

    //     }
    // }

    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times.`;
    });

    return (
        <div>
            <h2>Home Component</h2>
            <p>Welcome to Home Component</p>
            <p>You clicked {count} times.</p>
            <button type="button" className="btn btn-default" onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}


export default Home