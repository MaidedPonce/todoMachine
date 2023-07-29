import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { blogData } from '../mocks/blogs'

const BlogPage = () => {
  return (
    <>
      <h1>Blog Page</h1>
      <Outlet />
      <ul>
        {
          blogData.map((post, index) => (
            <BlogLink post={post} key={index} />
          ))
        }
      </ul>
    </>
  )
}

export default BlogPage

const BlogLink = ({ post }) => {
  return (
    <li>
      <Link to={`/blog/${post.slug}`}>{post.slug}</Link>
    </li>
  )
}
