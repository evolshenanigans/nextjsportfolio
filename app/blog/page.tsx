"use client"

import { useState } from 'react'

const Blog = () => {
  const [posts, setPosts] = useState<{ title: string, content: string }[]>([])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> & { target: HTMLFormElement }) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const title = formData.get('title') as string
    const content = formData.get('content') as string
    setPosts([...posts, { title, content }])
  }
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input type="text" name="title" id="title" />
        <label htmlFor="content">Content:</label>
        <textarea name="content" id="content" />
        <button type="submit">Submit</button>
      </form>
      <h2>Blog Posts</h2>
      <ul>
        {posts.map((post, i) => (
          <li key={i}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Blog