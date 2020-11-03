import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import Comment from '../Commnet/Comment';

const PostDetail = () => {
    const { postId } = useParams();
    const [postdetail, setpostdetail] = useState({});
    const [comment, setcomment] = useState([]);
    console.log(comment);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json())
            .then(data => setpostdetail(data))
    }, [])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then(res => res.json())
            .then(data => setcomment(data));
    }, [])

    return (
        <div>
            <div style={{
                border: '1px solid red',
                margin: '20px',
                padding: '10px',
                borderRadius: '10px',
                width: '50%'
            }}>
                <h2>This is postdetail</h2>
                <h3>id: {postId}</h3>
                <h3>{postdetail.title}</h3>
                <p>{postdetail.body}</p>
            </div>

            <div style={{
                marginLeft:"35px",
                borderLeft:"1px solid red",
                padding:"10px",
                width: "70%" 
                
            }}> 
             <h2>Comments</h2>
                 {
                comment.map(info => <Comment info={info}></Comment>)
            }
            </div>


        </div>
    );
};

export default PostDetail;