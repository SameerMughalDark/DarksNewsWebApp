import React, { Component } from 'react'
import NewsItems from './NewsItems'

export default class News extends Component {
    


    constructor(){
        super();
        // console.log("Constructor is launching");
        this.state={
            articles:[],
            loading:false
        }
    }
    async componentDidMount(){
       let url='https://newsapi.org/v2/top-headlines?q=general&apiKey=f1da1ab2951f406d891df92eb1dca66e';
       let data=await fetch(url);
       let parsedData= await data.json();
       this.setState({
        articles:parsedData.articles
       })
    }
  render() {
  
    return (
        <div className="row">
        
            {this.state.articles.map((element)=>{
                return    <div className="col-md-4" key={element.url}>
                <NewsItems title={element.title} description={element.description} imageUrl={element.urlToImage}  Url={element.url}/> 
                </div>
            })} 
         
       
      </div>
    )
  }
}
