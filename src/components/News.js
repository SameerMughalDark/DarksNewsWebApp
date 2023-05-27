import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner'

export default class News extends Component {
    


    constructor(){
        super();
        // console.log("Constructor is launching");
        this.state={
            articles:[],
            page:1,
            loading:false
        }
    }
    async componentDidMount(){
       let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=f1da1ab2951f406d891df92eb1dca66e&page=${this.state.page}&pageSize=${this.props.pageSize}`;
       this.setState({loading:true})
       let data=await fetch(url);
       let parsedData= await data.json();
       this.setState({
        articles:parsedData.articles,
        totalResults:parsedData.totalResults,
        loading:false
       })
    }
    handlePrevClick= async () => {
      console.log('Previous');
      let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=f1da1ab2951f406d891df92eb1dca66e&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data=await fetch(url);
      let parsedData= await data.json();
      this.setState({
       articles:parsedData.articles,
       page:this.state.page-1,
       loading:false
      })
    }
    
  handleNextClick= async () =>{
      console.log('Next');
      let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=f1da1ab2951f406d891df92eb1dca66e&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data=await fetch(url);
      let parsedData= await data.json();
      this.setState({
        articles:parsedData.articles,
        page:this.state.page+1,
        loading:false
      })
     
    
    }
  render() {
  
    return (
      <>
      {/* && syntax is used for true condition means if loading state is true show the spinner */}
    { this.state.loading && <Spinner/>}
      <div className="container">
        <div className="row ">
        
            {! this.state.loading && this.state.articles.map((element)=>{
                return    <div className="col-md-4" key={element.url}>
                <NewsItems title={element.title} description={element.description} imageUrl={element.urlToImage}  Url={element.url}/> 
                </div>
            })} 
         
      </div>
      <div className="container d-flex justify-content-between">
      <button disabled={this.state.page<=1}className='btn btn-dark' onClick={this.handlePrevClick}>Previous</button>
      <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className='btn btn-dark' onClick={this.handleNextClick}>Next</button>
     </div>
     </div>
     </>
    )
  }
}
