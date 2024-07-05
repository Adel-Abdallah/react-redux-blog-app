import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UsersPage from './pages/UsersPage';
import PostsPage from './pages/PostsPage';
import PostDetailsPage from './pages/PostDetailsPage';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <h1>Blogging Platform</h1>
        <Routes>
          <Route path="/users" element={<UsersPage />} />
          <Route path="/posts/:postId" element={<PostDetailsPage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/" exact element={<PostsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
