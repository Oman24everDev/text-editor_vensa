import { useEffect, useState } from 'react';
import { API_KEY, API_URL } from './api';
import TextArea from './components/textArea';
import './App.css';

function App() {

  const [textValue, setText] = useState("")

  useEffect(() => {
    fetch(`${API_URL}/${API_KEY}`)
    .then(async (response) => response.json())
    .then(res => setText(res))
    .catch(err => console.log(err)
    )
  }, [])

  // console.log(textValue);


  return (
    <div className="App">
      <TextArea data={textValue} />
    </div>
  );
}

export default App;
