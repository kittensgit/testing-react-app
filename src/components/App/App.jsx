import { useState, useEffect } from 'react';
import List from '../List/List';
import './App.css';

const data = ['html', 'css', 'js', 'ts', 'vue', 'angular', 'react']

function App() {

  const [] = useState()

  return (
    <div className="App">
      <div className="App-header">
        <List items={data}/>
      </div>
    </div>
  );
}

export default App;
