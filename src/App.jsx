import React from 'react';
import { AddComment } from './addComment';
import { CommentsList } from './commentsList';

import logo from './favicon.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Виджет комментариев на Redux Toolkit</h1>
      </div>
      <div className="comments">
        <AddComment />
        <CommentsList />
      </div>
    </div>
  );
}

export default App;
