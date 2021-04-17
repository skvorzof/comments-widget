import React, { useState } from 'react';
import { AddComment } from './addComment';
import { CommentsList } from './commentsList';
import { setDataStore, getDataStore } from './api';
import toast from './toast/toast';

import logo from './logo.svg';
import './App.css';

const dataStore = getDataStore();

function App() {
  const [comments, setComments] = useState(dataStore);

  // Добавить комментарий
  const addNewComment = (data) => {
    const { autor, comment } = data;

    // Проверка дублирования комментария
    const isExist = comments.some((el) => el.comment === comment);

    if (isExist) {
      toast('Такой комментарий существует 👾');
    } else {
      let newComment = {
        date: Date.now(),
        autor,
        comment,
      };

      setComments([...comments, newComment]);
    }
  };

  //Запись в localStorage
  setDataStore(comments);

  // Удалить комментарий
  const deleteComment = (date) => {
    const res = comments.filter((el) => el.date !== date);
    setComments(res);
  };

  return (
    <div className="App">
      <div className="header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Виджет комментариев</h1>
      </div>

      <div className="comments">
        <AddComment formData={addNewComment} />
        <CommentsList comments={comments} deleteComment={deleteComment} />
      </div>
    </div>
  );
}

export default App;
