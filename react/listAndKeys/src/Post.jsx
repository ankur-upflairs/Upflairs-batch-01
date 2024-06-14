import React from 'react'

function Post({userId,title,body}) {
  return (
    <div style={{width:'80%',margin: '10px auto',border:'1px solid'}}>
      <h3 style={{textAlign:'center',textDecoration:'underline'}}>{title}</h3>
      <p>{body}</p>
      <p style={{textAlign:'right'}}>post created by userId : {userId}</p>
    </div>
  )
}

export default Post
