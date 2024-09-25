import React from 'react'
import default_image from './News-image.jpg'
const NewsItem = ({title, description, src, url}) => {
  return (
    <div className="card bg-dark text-light px-2 py-2 col-lg-4" 
        style={{maxWidth: '290px',
             maxHeight: '450px',
             marginLeft: 'auto',
             marginRight: 'auto', 
             marginBottom: '15px',}}
    >
  {src === null ?<img src={default_image} style={{height: '200px', width: '100%', objectFit: 'cover'}} className="card-img-top" alt="..."/>: <img src={src} style={{height: '200px', width: '100%', objectFit: 'cover'}} className="card-img-top" alt="..."/>}
  <div className="card-body">
    <h5 className="card-title">{title.slice(0, 50)+ '....'}</h5>
    <p className="card-text">{description? description.slice(0,90) + '....': 'News articles wa not provided with a description'}</p>
    <a href={url} className="btn btn-primary" style={{boxShadow: '0 10px 15px rgba(0, 0, 0, 0.5)'}}>Read more</a>
  </div>
</div>
  )
}

export default NewsItem