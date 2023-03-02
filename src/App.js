import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [textValue, setText] = useState(null)

  useEffect(() => {
    fetch(`https://frontendtest.azurewebsites.net/Template/{bf3c866c-9593-4799-9dda-90bac7996913}`)
    .then(async (response) => response.json())
    .then(res => console.log(res))
    .catch(err => console.log(err)
    )
  }, [])  

  return (
    <div className="App">
      <h1>Hello!</h1>
    </div>
  );
}

export default App;
