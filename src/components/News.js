import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from '../components/Spinner/Spinner'

export class News extends Component {

  constructor() {
    super();
    this.state = {
      article: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=0a79b3d49837489d9e33a54893be0ee9&page=1&pageSize=${this.props.Items}`;
    this.setState({loading: true})
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ article: parsedData.articles, totalResults: parsedData.totalResults, loading: false});
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=0a79b3d49837489d9e33a54893be0ee9&page=${this.state.page-1}&pageSize=${this.props.Items}`;
    this.setState({loading: true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState(
      { page: this.state.page - 1,
        article: parsedData.articles,
        loading: false
      }
    )
    window.location.href = "secondpage.html#top"
  }

  handleNextClick = async () => {
    if (this.state.page + 1 <= Math.ceil(this.state.totalResults/this.props.Items))
    {
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=0a79b3d49837489d9e33a54893be0ee9&page=${this.state.page+1}&pageSize=${this.props.Items}`;
      this.setState({loading: true})
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState(
        { page: this.state.page + 1,
          article: parsedData.articles,
          loading: false
        }
      )
    }
    window.location.href = "secondpage.html#top";
  }

  render() {
    return (
      <>
      <h2 className="text-center" style={{marginTop: '10px'}}>NewsALERT - TOP Headlines Today</h2>
        {this.state.loading && <Spinner/>}
      <div className="container my-5">
        <div className="row">
          {!this.state.loading && this.state.article.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title?element.title.slice(0,54):""}
                  description={element.description?element.description.slice(0,80):""}
                  imageUrl={element.urlToImage}
                  newsURL={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-success" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.Items)} type="button" className="btn btn-success" onClick={this.handleNextClick}>Next &rarr;</button>
      </div> 
      </>
    );
  }
}

export default News;
