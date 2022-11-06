import React from 'react'
import '../css/AlbumCard.css'


function AlbumCard(props) {
    let {title, imgUrl , albumId, id } = props

    // const NewsItems = (props) => {
    //     let { title, desc, imgUrl, newsUrl, author, publishedAt } = props
    //      }

    return (


        <div>
            <div className='container' style={{backgroundColor: 'white'}}>
               <div className='span'>
               <span>Album ID {albumId}</span>
                <span>ID {id}</span>
               </div>
              <img src={!imgUrl ? "https://via.placeholder.com/600/e9603b" : imgUrl} className="card-img-top albumimg" alt="..." />
                <div className="">
                    <p className="card-title">{title}</p>
                </div>
            </div>
        </div>

    )
}


export default AlbumCard

