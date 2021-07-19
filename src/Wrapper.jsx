import { useState } from 'react';
import App from './App.jsx'

export default function Wrapper() {
    const [show, setShow] = useState(false);

    return (
        <div>
            {show ? <App /> : null}
            <button onClick={() => setShow(!show)}>
                Toggle Counters
            </button>
        </div>
    )
}