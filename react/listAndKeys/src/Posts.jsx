import React from 'react'
import Post from './Post'
import { posts } from './data'

function Posts() {
  return (
    <div>
      {/* <Post {...posts[0]} />
      <Post {...posts[1]} /> */}
      {posts.map((post,index)=>{
        return <Post {...post} key={post.id}/>
      })}

    </div>
  )
}

export default Posts
