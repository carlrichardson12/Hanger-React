import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { HomePage } from './pages/HomePage';

function App() {
  const image = 'https://images.aircharterservice.com/global/aircraft-guide/private-charter/cessna-citation-v.png'
  function setValue(newValue: any) {
    throw new Error('Function not implemented.');
  }

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={image} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <HomePage/>
      <BottomNavigation
  showLabels
  value={true}
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
>
  <BottomNavigationAction label="Recents" icon={'klk'} />
  <BottomNavigationAction label="Favorites" icon={'xcdc'} />
  <BottomNavigationAction label="Nearby" icon={'eeerv'} />
</BottomNavigation>
    </div>
  );
}

export default App;
