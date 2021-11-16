import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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
            <BrowserRouter>
                <Navbar
                    title="Text Utils"
                    mode={mode}
                    handleMode={handleMode}
                />
                <Alert alert={alert} />
                <Routes>
                    <Route
                        path=""
                        element={
                            <TextForm
                                showAlert={showAlert}
                                heading="Try TextUtils - word counter, character counter, remove extra spaces"
                                mode={mode}
                            />
                        }
                    />
                </Routes>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;
