import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BlogsProvider } from './Context/BlogContext';
import { UserProvider } from './Context/UserContext';
import { CommentProvider } from './Context/CommContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BlogsProvider>
  <UserProvider>
   <CommentProvider>
     <App />
   </CommentProvider>
  </UserProvider>
 </BlogsProvider>
);


