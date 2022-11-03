import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AlbumCard from './AlbumCard';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(res => {
        console.log(res)
        setPosts(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div className='container my-2' >
      <h2>Album</h2>
      <hr/>
      <div className='container'>
        <div className="row my-3">
          {
            posts.map((post) => {

              return <div className="col-md-4 " key={post.id} > 
              <AlbumCard title={post.title ? post.title : ""} albumId={post.albumId ? post.albumId : ""} id={post.id ? post.id : ""} imgUrl={post.urlToImage} />
              </div>
            })
          }

          {/* {articals.map((element) => {
            return <div className="col-md-4 " key={element.publishedAt} >
              <NewsItems title={element.title ? element.title : ""} desc={element.desc ? element.description : ""} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author ? element.author : "Unknown"} publishedAt={element.publishedAt} />
            </div>
          })} */}


        </div>
      </div>
    </div>
  )
}

export default Home