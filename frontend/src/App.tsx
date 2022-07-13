import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [appReady, setAppReady] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=> {
    const getAppState = async ()=> {
      try {
        setIsLoading(true)
        const res = await fetch('http://localhost:3333/')
        

        
        const body = await res.json()
        console.log(body);
        setAppReady(true)
        setIsError(false)
        setIsLoading(false)

      } catch (error) {
        console.log(error)
        setIsError(true)
        setAppReady(false)
        setIsLoading(false)
      }
   
    }
    getAppState()
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        {isLoading && <h1>Loading :/</h1>}
        {appReady && <h1>App is connected to backend :D </h1>}
        {isError && <h1>App could not connect to  backend :(</h1>}
      </header>
    </div>
  );
}

export default App;
