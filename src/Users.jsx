import { useState, useEffect } from 'react';
import './Users.css';

export default function Users() {
    const [users, setUsers] = useState(false);

    // Here the useEffect starts to "load" users after component is first rendered
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users?_delay=5000&t='+Math.random())
            .then(response => response.json())
            .then(result => setUsers(result))
    }, []);

    return (
        <div className="users">
            Users
            {users ? 
                <ul>
                    {users.map(user => <li>{user.name}</li>)}
                </ul>
            :
                <p className="loading">
                    <div>LOADING</div>
                </p>
            }
        </div>
    );
}