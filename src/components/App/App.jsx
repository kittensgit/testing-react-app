import React, { useEffect, useState } from 'react';
import List from '../List/List';
import Search from '../Search/Search';
import './App.css';

const data = ['html', 'css', 'javascript', 'typescript', 'vue', 'angular', 'react']

function App() {

  const [search, setSearch] = useState('')
  const [items, setItems] = useState(data)

  useEffect(() => {
    setItems(data.filter(el => el.toLowerCase().includes(search.toLowerCase())))
  }, [search])

  return (
    <div className="App">
      <div className="App-header">
        <Search value={search} onChange={(e) => setSearch(e.target.value)}>
          Find course:
        </Search>
        <List items={items} />
      </div>
    </div>
  );
}

export default App;
