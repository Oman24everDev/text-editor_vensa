import React, { useEffect, useState } from 'react'
import { API_KEY, API_URL } from './api';
import './App.css';

function App() {

  const [data, setText] = useState("")

  const handleButtonClick = () => {
    fetch(`${API_URL}/${API_KEY}`)
      .then(async (response) => response.json())
      .then(data => { setText(data); })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  const handleChange = (event) => {
    setText(event.target.value);
  }

  // useEffect(() => {
  //   fetch()
  //     .then(async (response) => response.json())
  //     .then(res => setText(res))
  //     .catch(err => console.log(err)
  //     )
  // }, [])

  // console.log(data);

  return (
    <div className="App">
      <textarea name="" id="textfield" cols="65" rows="10" value={data.template} onChange={handleChange} ></textarea>
      <div>
        <button className='generate-btn' onClick={handleButtonClick}>Generate</button>
        <button className='save-btn'>Save</button>
      </div>

    </div>
  );
}

export default App;
