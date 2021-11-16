import React, { useState } from 'react';

function TextForm(props) {
    const [text, setText] = useState('');

    const changeHandler = (e) => {
        setText(e.target.value);
    };

    const handleUpClick = () => {
        setText(text.toUpperCase());
        props.showAlert('Converted to UpperCase!', 'success');
    };

    const handleLowClick = () => {
        setText(text.toLowerCase());
        props.showAlert('Converted to LowerCase!', 'success');
    };

    const handleClearClick = (e) => {
        setText('');
        props.showAlert('TextBox Cleared!', 'success');
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        props.showAlert('Text Copied!', 'success');
    };

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert('Extra spaces removed!', 'success');
    };

    const handleRemoveSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(''));
        props.showAlert('All spaces removed!', 'success');
    };

    return (
        <React.Fragment>
            <div
                className="container py-3"
                style={{
                    backgroundColor:
                        props.mode === 'dark' ? 'rgb(33,37,41)' : 'white',
                    color: props.mode === 'dark' ? 'white' : 'rgb(33,37,41)',
                }}
            >
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label">
                        Enter your Text below:
                    </label>
                    <textarea
                        className="form-control"
                        id="myBox"
                        rows="8"
                        placeholder="Enter your text here..."
                        value={text}
                        onChange={changeHandler}
                        style={{
                            backgroundColor:
                                props.mode === 'dark'
                                    ? 'rgb(73,77,71)'
                                    : 'white',
                            color:
                                props.mode === 'dark'
                                    ? 'white'
                                    : 'rgb(33,37,41)',
                        }}
                    ></textarea>
                </div>
                <button
                    disabled={text.length === 0}
                    className="btn btn-primary mx-2 my-2"
                    onClick={handleUpClick}
                >
                    Convert to Uppercase
                </button>
                <button
                    disabled={text.length === 0}
                    className="btn btn-primary mx-2 my-2"
                    onClick={handleLowClick}
                >
                    Convert to Lowercase
                </button>
                <button
                    disabled={text.length === 0}
                    className="btn btn-danger mx-2 my-2"
                    onClick={handleClearClick}
                >
                    Clear
                </button>
                <button
                    disabled={text.length === 0}
                    className="btn btn-primary mx-2 my-2"
                    onClick={handleCopy}
                >
                    Copy Text
                </button>
                <button
                    disabled={text.length === 0}
                    className="btn btn-primary mx-2 my-2"
                    onClick={handleExtraSpaces}
                >
                    Remove Extra Spaces
                </button>
                <button
                    disabled={text.length === 0}
                    className="btn btn-primary mx-2 my-2"
                    onClick={handleRemoveSpaces}
                >
                    Remove All Spaces
                </button>
            </div>
            <div
                className="container my-3 py-3"
                style={{
                    backgroundColor:
                        props.mode === 'dark' ? 'rgb(33,37,41)' : 'white',
                    color: props.mode === 'dark' ? 'white' : 'rgb(33,37,41)',
                }}
            >
                <h2>Summary:</h2>
                <p>
                    {
                        text
                            .split(/\s+/)
                            .filter((element) => element.length !== 0).length
                    }{' '}
                    words and {text.length} characters.
                </p>
                <p>Read in {(1 / 125) * text.split(' ').length} minutes</p>
                <h4>Preview:</h4>
                <p>{text.length > 0 ? text : 'Nothing to preview'}</p>
            </div>
        </React.Fragment>
    );
}

export default TextForm;
