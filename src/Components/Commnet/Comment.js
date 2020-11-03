import React from 'react';

const Comment = (props) => {
    const {id,name,email,body,postId} = props.info;
    return (
        <div >
            <ul>
                <li>
                    <h3>PostId: {postId}</h3>
                    <h3>Id : {id}</h3>
                    <h3>Name: {name}</h3>
                    <h4>email: {email}</h4>
                   <p>{body}</p>
                </li>
            </ul>
            
        </div>
    );
};

export default Comment;