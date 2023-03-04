import React, { useState } from 'react'
import { API_KEY, API_URL } from './api';
import DropdownMenu from './components/MergeFields';
import './App.css';

function App() {

  const [data, setText] = useState("")
  const [charCount, setCharCount] = useState(0);


  const handleButtonClick = async () => {
    try{
      const response = await fetch(`${API_URL}/${API_KEY}`);
      const data = await response.json();
      setText(data);
    } catch (error) {
      console.error(error);
    }
  };


  const handleSave = () => {
    fetch(`${API_URL}/{data}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data })
    })
    .then(response => {
      console.log('Template saved successfully!');
    })
    .catch(error => {
      console.error('Error saving template:', error);
    });
  };


  const handleChange = (event) => {
    const value = event.target.value;

    if (value.length) {
    setText(value);
    setCharCount(value.length);
    event.preventDefault();
    return;
    }
  };

  console.log(data);

  return (
    <div className="App">
      <textarea 
        id="textfield" cols="65" rows="10"
        value={data.template}
        onChange={handleChange}
        style={{ color: charCount > 160 ? "red" : "gray" }}>
       
      </textarea>
      <DropdownMenu data={data} />
   
      <span>{charCount} of 160 characters</span>
      <div>
        <button className='generate-btn' onClick={handleButtonClick}>Load</button>
        <button className='save-btn' onClick={handleSave}>Save</button>
      </div>

    </div>
  );
}

export default App;
