import React from 'react';
import './Post.css';

const Post = (props) => {
  const { data } = props;

  return (
    <article className="post-container">
      <h3 className="post-title">{data.title}</h3>
      <div className="post-img-container">
        <img className="post-img" src={data.url} alt="" />
      </div>
      <div className="post-datas-container">
        <span className="post-author"> {data.author} </span>
        {/* <span className="post-creation-timer"> {data.created_utc}</span> */}
        <span className="post-creation-timer">creation time</span>
        <span className="post-comments">comments : {data.num_comments} </span>
      </div>
    </article>
  );
};

export default Post;
