import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuth } from './auth'

const PostPage = () => {
  const navigate = useNavigate()
  const { slug } = useParams()
  const auth = useAuth()
  const getPost = auth.blogs.find((post) => post.slug === slug)
  const canDelete = auth.user?.isAdmin.roleName === 'ADMIN' || getPost.author === auth.user?.username
  const returnToBlog = () => {
    navigate('/blog')
    // navigate('/', { replace: true });
    // navigate(-1)
  }
  useEffect(() => {
    if (!getPost) {
      navigate('/blog')
    }
  }, [getPost])
  return (
    <section>
      <div>
        <h2>{getPost?.title}</h2>
        <p>Content: {getPost?.content}</p>
        <p>Autor: {getPost?.author}</p>
      </div>
      <button onClick={returnToBlog}>Rregresar a blog</button>
      {
        canDelete && (
          <button onClick={() => auth.deletePost(auth.user.isAdmin.username, getPost.author)}>Eliminar post</button>
        )
      }
    </section>
  )
}

export default PostPage
