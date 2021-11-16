import './App.css';
import React, { useState } from 'react';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
    const [mode, setMode] = useState('light');
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type,
        });
        setTimeout(() => {
            setAlert(null);
        }, 1500);
    };

    const handleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = 'rgb(0, 0, 0)';
            showAlert('Dark mode has been enabled', 'success');
        } else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
            showAlert('Light mode has been enabled', 'success');
        }
    };
    return (
        <React.Fragment>
            <Navbar title="Text Utils" mode={mode} handleMode={handleMode} />
            <Alert alert={alert} />

            <TextForm
                showAlert={showAlert}
                heading="Try TextUtils - word counter, character counter, remove extra spaces"
                mode={mode}
            />
        </React.Fragment>
    );
}

export default App;
