import React from 'react';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Asset from './components/Wijmo/Asset';



const App = () => {
   
    return (
        <>
            <Navbar />
            <div className="app">
                <Asset />
                <Dashboard />
            </div>
        </>
    )
}

export default App