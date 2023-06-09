import React, { Component } from 'react'

export default class NewsItems extends Component {
    render() {
    




        let { title, description, imageUrl,Url,authorName,publishedDate } = this.props;
        return (
            <div className="container my-3">

                <div className="card" >
                    <img src={imageUrl===null?"https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg":imageUrl}className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title===null?"Unknown":title.slice(0,50)}</h5>
                        <p className="card-text">{description===null?"Click Button to Read full News":description.slice(0,75)}...</p>
                        <p className='authorTextModification'>Author: <b>{authorName?authorName:'Anonymous'}</b> </p>
                        <p className='dateTextModification'>Published at : <b> <i>{new Date (publishedDate).toGMTString()}</i></b></p>
                        <a href={Url} target='_blank' rel="noreferrer" className="btn btn-warning">Read Full News</a>
                    </div>
                </div>
            </div>
        )
    }
}

