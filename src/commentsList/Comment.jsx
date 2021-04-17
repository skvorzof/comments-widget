import React from 'react';

const Comment = ({ date, autor, comment, handleRemove }) => {
  let dateTime = new Date(date).toLocaleString('ru');

  return (
    <li>
      <div className="autor">
        {autor}
        <span className="date"> {dateTime}</span>
      </div>
      <div className="text">{comment}</div>

      <button className="btn btn-remove" onClick={() => handleRemove(date)}>
        Удалить
      </button>
    </li>
  );
};

export default Comment;
