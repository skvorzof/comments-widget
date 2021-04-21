import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '../store/commentsSlice';
import { setDataStore } from '../api.js';

import toast from '../toast/toast';
import './add-comment.css';

export const AddComment = () => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments.comments);

  const autorRef = useRef();
  const commentRef = useRef();

  const sendForm = (e) => {
    e.preventDefault();

    const autor = autorRef.current.value;
    const comment = commentRef.current.value;

    // Проверка полей если пусто
    if (autor.trim() === '') {
      toast('Поле имя не должно быть пустым ✍️');
    } else if (comment.trim() === '') {
      toast('Поле комментария не должно быть пустым ✍️');
    } else {
      // Проверка дублирования комментария
      const isExist = comments.some((el) => el.comment === comment);

      if (isExist) {
        toast('Такой комментарий существует 👾');
      } else {
        const newComment = {
          date: Date.now(),
          autor: autor.trim(),
          comment: clearTags(comment).trim(),
        };

        setDataStore([...comments, newComment]); // Добавляем в LocalStore

        dispatch(addComment(newComment)); // Добавляем в store
      }
      // Очистить поля
      autorRef.current.value = '';
      commentRef.current.value = '';
    }
  };

  //Удалить html tags
  const clearTags = (str) => {
    return str.replace(/<[^>]+>/gi, '');
  };

  return (
    <form onSubmit={sendForm}>
      <input ref={autorRef} type="text" placeholder="Имя или ник" />
      <textarea ref={commentRef} placeholder="Комментарий" rows="4"></textarea>
      <button className="btn btn-form">Отправить</button>
    </form>
  );
};
