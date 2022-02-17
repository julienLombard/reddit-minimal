import React from 'react';

const Post = (props) => {
  const { data } = props;

  return (
    <article>
      <h3>{data.title}</h3>
      <div>
        <img src={data.url} alt="" />
      </div>
      <div>
        <span> {data.author} </span>
        <span> {data.created_utc} </span>
        <span> {data.num_comments} </span>
      </div>
    </article>
  );
};

export default Post;
