// NodeModules
import React from 'react';
import ListContent from './components/list/ListContent';

function App() {
  return (
    <div>
      <ListContent name='backlog' />
      <ListContent name='inprogress' />
      <ListContent name='done' />
    </div>
  );
}

export default App;
