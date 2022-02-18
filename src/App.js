import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAsyncAllPosts } from './features/allPosts/allPostsSlice';
import AllPosts from './features/allPosts/AllPosts';
import SubReddits from './components/SubReddits/SubReddits';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncAllPosts());
  }, [dispatch]);

  return (
    <div className="App">
      <main className="App-main">
        <SubReddits />
        <AllPosts />
      </main>
    </div>
  );
}

export default App;
