import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteComment } from '../store/commentsSlice';
import { setDataStore } from '../api.js';
import toast from '../toast/toast';

import './comments.css';

export const CommentsList = () => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments.comments);

  const handleDelete = (comment) => {
    const res = comments.filter((el) => el.date !== comment);

    setDataStore(res); // Удаляем в LocalStore

    dispatch(deleteComment(comment)); // Удаляем в store
    toast('Комментарий удалён 🤖');
  };

  return (
    <ul>
      {comments
        .map(({ date, autor, comment }) => {
          let dateTime = new Date(date).toLocaleString('ru');
          return (
            <li key={date}>
              <div className="autor">
                {autor}
                <span className="date"> {dateTime}</span>
              </div>
              <div className="text">{comment}</div>

              <button
                className="btn btn-remove"
                onClick={() => handleDelete(date)}
              >
                Удалить
              </button>
            </li>
          );
        })
        .reverse()}
    </ul>
  );
};
