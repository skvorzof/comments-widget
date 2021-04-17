import React, { useState } from 'react';
import toast from '../toast/toast';
import './add-comment.css';

export const AddComment = ({ formData }) => {
  const [autor, setAutor] = useState('');
  const [comment, setComment] = useState('');

  const sendForm = (e) => {
    e.preventDefault();
    // Проверка полей если пусто
    if (autor.trim() === '') {
      toast('Поле имя не должно быть пустым ✍️');
    } else if (comment.trim() === '') {
      toast('Поле комментария не должно быть пустым ✍️');
    } else {
      formData({
        autor: autor.trim(),
        comment: clearTags(comment).trim(),
      });
      // Очистить поля
      setAutor('');
      setComment('');
    }
  };

  //Удалить html tags
  const clearTags = (str) => {
    return str.replace(/<[^>]+>/gi, '');
  };

  return (
    <form onSubmit={sendForm}>
      <input
        value={autor}
        onChange={(e) => setAutor(e.target.value)}
        type="text"
        placeholder="Имя или ник"
      />
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Комментарий"
        rows="4"
      ></textarea>
      <button className="btn btn-form">Отправить</button>
    </form>
  );
};
