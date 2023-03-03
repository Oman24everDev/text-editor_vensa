import React, { useEffect, useState } from 'react'
import { API_KEY, API_URL } from './api';
import './App.css';

function App() {

  const [data, setText] = useState("")
  const [charCount, setCharCount] = useState(0);


  const handleButtonClick = () => {
    fetch(`${API_URL}/${API_KEY}`)
      .then(async (response) => response.json())
      .then(data => { setText(data); })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }


  useEffect(() => {
    const stringData = JSON.stringify(`${data}`);
    setCharCount(stringData.length);
  }, [data]);


  const handleSave = () => {
    console.log(`Saving template: ${data.template}`);
  };

  const handleChange = (event) => {
    const newText = event.target.value;
    setText(newText.slice(0, 160));
    setCharCount(newText.length);
  };


  return (
    <div className="App">
      <textarea 
        id="textfield" cols="65" rows="10"
        value={data.template}
        onChange={handleChange}
        style={{ color: charCount > 160 ? "red" : "gray" }}>   
      </textarea>
      <span>{charCount} of 160 characters</span>
      <div>
        <button className='generate-btn' onClick={handleButtonClick}>Generate</button>
        <button className='save-btn' onClick={handleSave}>Save</button>
      </div>

    </div>
  );
}

export default App;
