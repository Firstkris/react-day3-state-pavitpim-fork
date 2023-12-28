// NodeModules
import React from 'react';
import TodoContent from './components/TodoContent';
import ListContent from './components/list/ListContent';

function App() {
  return (
    <div>
      <TodoContent />
      <ListContent name='book' />
      <ListContent name='shopping' />
    </div>
  );
}

export default App;
