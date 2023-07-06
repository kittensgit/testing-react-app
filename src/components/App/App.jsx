import React, { useState } from 'react';
import List from '../List/List';
import Search from '../Search/Search';
import './App.css';

const data = ['html', 'css', 'js', 'ts', 'vue', 'angular', 'react']

function App() {

  const [search, setSearch] = useState('')

  return (
    <div className="App">
      <div className="App-header">
        <Search value={search} onChange={(e) => setSearch(e.target.value)}>
          Find course:
        </Search>
        <List items={data} />
      </div>
    </div>
  );
}

export default App;
