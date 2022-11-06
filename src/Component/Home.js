import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AlbumCard from './AlbumCard';


const pageSize = 8;

function Home() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
   
    axios.get(`https://jsonplaceholder.typicode.com/photos`)
      .then(res => {
        setPage(page + 1);
        setPosts(res.data);
      })
      .catch(err => {
        console.log(err)
      })
  },[] )
  const len = setPosts.length
  console.log(len)





  // const handlePrevioucClick = () => {
  //   console.log('clicked')
  //   axios.get(`https://jsonplaceholder.typicode.com/photos&page${page -1}&pagesize=8`)
  //   .then(res => {
  //   setPage(
  //     page - 1,
  //     setPosts(res.data.len),
  //   )
  // })

  // }
  // const handleNextClick = () => {
  //   console.log('clicked')
  //   axios.get(`https://jsonplaceholder.typicode.com/photos&page${page -1}&pagesize=8`)
  //   .then(res => {
  //     pageSize = { pageSize }
  //   setPage(
  //     page + 1,
  //     setPosts(res.data.len),
  //   )
  // })
  // }

  return (
    <div className='container my-2'  >
      <h2 style={{ textAlign: 'center' }}>Album</h2>
      <hr />
      <div className='container'>
        <div className="row my-3">
          {
            posts.map((post) => {
              return <div className="col-md-3 " key={post.id} >
                <AlbumCard title={post.title ? post.title : ""} albumId={post.albumId ? post.albumId : ""} id={post.id ? post.id : ""} imgUrl={post.urlToImage} />

              </div>
            })
          }
        </div>
      </div>
      <div className='container d-flex justify-content-between'>
        <button disabled={page <= 1} type="button"  className="btn btn-dark"> &larr; Previous </button>
        <button type="button" disabled={page + 1 > Math.ceil(len / { pageSize })}  className="btn btn-dark"> Next &rarr; </button>
      </div>
    </div>
  )
}

export default Home