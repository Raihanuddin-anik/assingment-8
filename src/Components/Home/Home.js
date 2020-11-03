import React from 'react';
import { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Home = () => {
    const [post, setpost] = useState([]);
  console.log(post)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setpost(data));
  }, [])
    return (
        <div>
            {
             post.map(info => <Post allInfo={info}></Post>)
           }

        </div>
    );
};

export default Home;