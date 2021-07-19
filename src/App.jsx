import { useState, useEffect } from 'react';

export default function App() {
    console.log("App is being rendered");

    const [countOne, setCountOne] = useState(0);
    const [countTwo, setCountTwo] = useState(0);

    // Here we tell React that the component needs to do something after render
    // This function we pass is our effect
    // The effect function now runs every time our function runs
    useEffect(() => {
        // This function is an "effect"!
        console.log("App first useEffect is running");
        // setCountOne(countOne + 500); NOTE! This causes an infinite loop of render->Effect->state change->render->Effect....
    });

    // Here we force our effect to run only when countOne changes
    useEffect(() => {
        // This function is an "effect"!
        console.log("App second useEffect (countOne) has changed!")
    }, [countOne]);

    // Because of this, if define that an useEffect is dependent on an empty array
    useEffect(() => {
        // This function is an "effect"!
        // This effect runs *only* the first time our component is rendered onto the page
        // Basically this is the hook-based equivalent of componentDidMount
        console.log("App third use effect is running...... RUN ONLY ONCE");

        const timer = setInterval(() => {
            console.log("Tick");
        }, 1000);

        const pre = document.querySelector("#messages");
        pre.innerText = pre.innerText + "\nApp is active!!!";

        // The function name here is just convenience, you don't need it
        return function cleanup() {
            // Basically "cleanup" here is the hook-based equivalent of componentWillUnmount
            console.log("----- App third useEffect cleanup is running!");
            clearInterval(timer);
            pre.innerText = pre.innerText + "\nApp has been removed";
        }
    }, [])

    return (
        <div>
            <button onClick={() => setCountOne(countOne + 1)}>
                One {countOne}
            </button>
            <button onClick={() => setCountTwo(countTwo + 1)}>
                Two {countTwo}
            </button>
        </div>
    );
}