import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { subRedditData } from '../../data/subRedditsData';
import { fetchAsyncAllPosts } from '../../features/allPosts/allPostsSlice';
import './SubReddits.css';

const SubReddits = () => {
  const dispatch = useDispatch();
  const getSubReddit = useSelector((state) => state.allPosts.subreddit);

  const handleClick = (e) => {
    dispatch(fetchAsyncAllPosts(e.target.value));
  };

  let renderSubReddits =
    subRedditData !== undefined ? (
      subRedditData.map((subReddit) => (
        <li className="subReddits-li" key={subReddit.id}>
          <button
            className={`subReddits-button ${
              getSubReddit === subReddit.url && 'subReddits-button-active'
            }`}
            type="button"
            onClick={handleClick}
            value={subReddit.url}
          >
            <img
              className="subReddits-icons"
              src={subReddit.img}
              alt={subReddit.name}
            />
            {subReddit.name}
          </button>
        </li>
      ))
    ) : (
      <li>Error</li>
    );

  return (
    <div className="subReddits-container">
      <h2 className="subReddits-title">Subreddits</h2>
      <ul className="subReddits-ul"> {renderSubReddits} </ul>
    </div>
  );
};

export default SubReddits;
