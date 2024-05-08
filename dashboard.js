import React, { useState } from 'react';
import UserDashboard from './components/UserDashboard';

const App = () => {
    const [authenticated, setAuthenticated] = useState(true); // Replace with your authentication logic
    const [username, setUsername] = useState('John'); // Replace with the user's name

    return (
        <div>
            <header>
                <h1>My App</h1>
            </header>
            <main>
                {authenticated ? (
                    <UserDashboard username={username} />
                ) : (
                    <p>Please log in to access your dashboard.</p>
                )}
            </main>
            <footer>
                <p>&copy; 2023 My App</p>
            </footer>
        </div>
    );
};

export default App;

