import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchAsyncSearchedPosts } from '../../features/allPosts/allPostsSlice';

const SearchBar = () => {
  const dispatch = useDispatch();

  const formatRequest = (search) => {
    const rgx = /\w+/g;
    const requestArr = search.match(rgx);
    let request = requestArr[0];

    for (let i = 1; i < requestArr.length; i++) {
      request = request.concat('%20', requestArr[i]);
    }
    return request;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchAsyncSearchedPosts(formatRequest(e.target.searchBar.value)));
  };

  return (
    <nav className="searchBar-container">
      <div className="searchBar-logo-container"></div>
      <form className="searchBar-form" onSubmit={handleSubmit}>
        <input className="searchBar-input" type="text" name="searchBar" />
        <input className="searchBar-submit" type="submit" value="Search" />
      </form>
    </nav>
  );
};

export default SearchBar;
