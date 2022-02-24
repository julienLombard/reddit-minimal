import React from 'react';
import './Comment.css';

const Comment = (props) => {
  const { data } = props;

  return (
    <article className="comment-container">
      <div className="comment-datas-container">
        <span className="comment-author"> {data.author} </span>
        {/* <span className="comment-creation-timer"> {data.created_utc}</span> */}
        <span className="comment-creation-timer">creation time</span>
      </div>
      <div className="comment-body-container">
        <p className="comment-body">{data.body}</p>
      </div>
    </article>
  );
};

export default Comment;
