import React from 'react';
import Comment from './Comment';
import './comments.css';

export const CommentsList = (props) => {
  return (
    <ul>
      {props.comments
        .map(({ date, autor, comment }) => (
          <Comment
            key={date}
            date={date}
            autor={autor}
            comment={comment}
            handleRemove={props.deleteComment}
          />
        ))
        .reverse()}
    </ul>
  );
};
