import React from 'react'
import '../css/AlbumCard.css'


function AlbumCard(props) {
    let {title, imgUrl , albumId, id } = props

    // const NewsItems = (props) => {
    //     let { title, desc, imgUrl, newsUrl, author, publishedAt } = props
    //      }

    return (

        <div>
        <div className="my-3" >
            <div className='container'>
                <p>Album ID {albumId}</p>
                <p>ID {id}</p>
              <img src={!imgUrl ? "https://via.placeholder.com/600/e9603b" : imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                </div>
            </div>
        </div>
    </div>
    )
}


export default AlbumCard

