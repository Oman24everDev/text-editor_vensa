import { useEffect, useState } from 'react';
import { API_KEY, API_URL } from './api';
import TextArea from './components/textArea';
import './App.css';

function App() {

  const [textValue, setText] = useState(null)

  useEffect(() => {
    fetch(`${API_URL}/${API_KEY}`)
    .then(async (response) => response.json())
    .then(res => console.log(res))
    .catch(err => console.log(err)
    )
  }, [])  

  return (
    <div className="App">
      <TextArea />
    </div>
  );
}

export default App;
