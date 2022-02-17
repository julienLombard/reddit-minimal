import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAsyncAllPosts } from './features/allPosts/allPostsSlice';
import AllPosts from './features/allPosts/AllPosts';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncAllPosts());
  }, [dispatch]);

  return (
    <div className="App">
      <main className="App-main">
        <AllPosts />
      </main>
    </div>
  );
}

export default App;
