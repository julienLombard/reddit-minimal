import React from 'react';
import { useDispatch } from 'react-redux';
import { subRedditData } from '../../data/subRedditsData';
import { fetchAsyncAllPosts } from '../../features/allPosts/allPostsSlice';

const SubReddits = () => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(fetchAsyncAllPosts(e.target.value));
  };

  let renderSubReddits =
    subRedditData !== undefined ? (
      subRedditData.map((subReddit) => (
        <li key={subReddit.id}>
          <button type="button" onClick={handleClick} value={subReddit.url}>
            {subReddit.name}
          </button>
        </li>
      ))
    ) : (
      <li>Error</li>
    );

  return (
    <div className="subReddits-container">
      <h2>Subreddits</h2>
      <ul className="subReddits-ul"> {renderSubReddits} </ul>
    </div>
  );
};

export default SubReddits;
