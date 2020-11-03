import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'

const PostDetail = () => {
    const {postId} = useParams();
     const [postdetail, setpostdetail] = useState({});
     useEffect(()=>{
         fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
         .then(res => res.json())
         .then(data => setpostdetail(data))
     })
    return (
        <div style={{
            border: '1px solid red',
            margin: '20px',
            padding: '10px',
            borderRadius: '10px',
            width:'50%'
          }}>
            <h2>This is postdetail</h2>
            <h3>id: {postId}</h3>
           <h3>{postdetail.title}</h3>
           <p>{postdetail.body}</p>
        </div>
    );
};

export default PostDetail;