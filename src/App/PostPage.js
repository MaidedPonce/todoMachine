import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { blogData } from '../mocks/blogs'
import { useAuth } from './auth'

const PostPage = () => {
  const navigate = useNavigate()
  const { slug } = useParams()
  const auth = useAuth()
  const getPost = blogData.find((post) => post.slug === slug)
  const canDelete = auth.user?.isAdmin.roleName === 'ADMIN' || getPost.author === auth.user?.username
  console.log(auth.user)
  const returnToBlog = () => {
    // navigate('/blog')
    // navigate('/', { replace: true });
    navigate(-1)
  }
  return (
    <section>
      <div>
        <h2>{getPost.title}</h2>
        <p>Content: {getPost.content}</p>
        <p>Autor: {getPost.author}</p>
      </div>
      <button onClick={returnToBlog}>Rregresar a blog</button>
      {
        canDelete && (
          <button>Eliminar post</button>
        )
      }
    </section>
  )
}

export default PostPage
