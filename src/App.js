import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  fetchAsyncAllPosts,
  fetchAsyncSearchedPosts,
} from './features/allPosts/allPostsSlice';
import { fetchAsyncAllComments } from './features/allComments/allCommentsSlice';
import AllPosts from './features/allPosts/AllPosts';
import SubReddits from './components/SubReddits/SubReddits';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncAllPosts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchAsyncSearchedPosts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchAsyncAllComments());
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        <SearchBar />
      </header>
      <main className="App-main">
        <SubReddits />
        <AllPosts />
      </main>
    </div>
  );
}

export default App;
