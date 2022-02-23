import React from 'react';
import { useDispatch } from 'react-redux';
import AllComments from '../../features/allComments/AllComments';
import { fetchAsyncAllComments } from '../../features/allComments/allCommentsSlice';
import './Post.css';

const Post = (props) => {
  const { data } = props;
  const dispatch = useDispatch();
  const handleClick = (e) => {
    dispatch(fetchAsyncAllComments(e.target.dataset.permalink));
  };

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
        <span
          className="post-comments"
          id={data.id}
          data-permalink={data.permalink}
          onClick={handleClick}
        >
          comments : {data.num_comments}
        </span>
      </div>
      <AllComments id={data.id} />
    </article>
  );
};

export default Post;
