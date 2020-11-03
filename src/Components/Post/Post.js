import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Post = (props) => {
    const {title, id, body} =props.allInfo;
    return (
        <div style={{
            border: '1px solid red',
            margin: '20px',
            padding: '10px',
            borderRadius: '10px',
            width:'50%'
          }}>
           <h3> TITLE : {title} </h3>
            <p>{body}</p>
            <h5>ID : {id}</h5>
            <Button color="primary"> <Link to={`/post/${id}`}> Show PostDetail </Link> </Button>
        </div>
    );
};

export default Post;